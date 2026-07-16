/**
 * Parses page/pageSize (Strapi-style pagination[page]/pagination[pageSize])
 * plus plain ?page and ?limit, with sane defaults and caps.
 */
function parsePagination(query) {
  const page =
    parseInt(query["pagination[page]"] || query.page, 10) > 0
      ? parseInt(query["pagination[page]"] || query.page, 10)
      : 1;
  const rawSize = parseInt(query["pagination[pageSize]"] || query.limit, 10);
  const pageSize = rawSize > 0 && rawSize <= 100 ? rawSize : 25;
  const skip = (page - 1) * pageSize;
  return { page, pageSize, skip };
}

/**
 * Parses a Strapi-style `sort=field:asc|desc` (or plain `sort=field`) param
 * into a Mongoose sort object.
 */
function parseSort(sortParam, fallback = { createdAt: -1 }) {
  if (!sortParam) return fallback;
  const [field, dir] = String(sortParam).split(":");
  if (!field) return fallback;
  return { [field]: dir === "asc" ? 1 : -1 };
}

function buildMeta({ page, pageSize, total }) {
  return {
    pagination: {
      page,
      pageSize,
      pageCount: Math.max(Math.ceil(total / pageSize), 1),
      total,
    },
  };
}

module.exports = { parsePagination, parseSort, buildMeta };
