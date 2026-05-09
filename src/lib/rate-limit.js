/**
 * Simple in-memory rate limiter.
 * NOTE: For production with multiple server instances,
 * replace with an external store (Redis, etc.).
 */
const store = new Map();

/**
 * Checks and enforces rate limits for a given key.
 *
 * @param {string} key - Unique identifier (e.g. IP or email)
 * @param {object} [options]
 * @param {number} [options.limit=3] - Max requests allowed in the window
 * @param {number} [options.windowMs=60000] - Time window in milliseconds (default: 1 min)
 * @returns {{ allowed: boolean, remaining: number, resetIn: number }}
 */
function rateLimit(key, { limit = 3, windowMs = 60000 } = {}) {
  const now = Date.now();

  if (!store.has(key)) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetIn: windowMs };
  }

  const entry = store.get(key);

  if (now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetIn: windowMs };
  }

  entry.count += 1;

  if (entry.count > limit) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: entry.resetAt - now,
    };
  }

  return {
    allowed: true,
    remaining: limit - entry.count,
    resetIn: entry.resetAt - now,
  };
}

/**
 * Cleans up expired entries from the store.
 * Call periodically to prevent memory leaks.
 */
function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) {
      store.delete(key);
    }
  }
}

// Auto-cleanup every 5 minutes
setInterval(cleanupRateLimitStore, 5 * 60 * 1000).unref();

export { rateLimit };
