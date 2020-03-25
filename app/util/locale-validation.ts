/**
 * Check that a locale (or "translation") contains valid JSON. Returns the
 * JSONParseError if the provided JSON is invalid.
 *
 * This is a common mistake developers make in this project, so we check each
 * JSON locale translation and notify developer when starting server if any errors
 * in the JSON are present.
 */
export function checkIfValidLocaleJSON(
  filename: string,
  json: string
): string | null {
  try {
    JSON.parse(json);
    return null;
  } catch (error) {
    const hint = `${filename} locale has a JSON syntax error. Have you forgotten a comma (,)?`;
    return [hint, error.message].join('\n');
  }
}
