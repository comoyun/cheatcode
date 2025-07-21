/*
 * @title: Hash Table
 * @time: O(1)
 * @space: O(n)
 */

const site = 'https://tiny.io/';
const longToShortURL = {};
const shortToLongURL = {};
let id = 0;
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = longUrl => {
    if (longUrl in longToShortURL) return longToShortURL[longUrl];
    const shortUrl = site + ++id;
    longToShortURL[longUrl] = shortUrl;
    shortToLongURL[shortUrl] = longUrl;
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl =>
    shortUrl in shortToLongURL && shortToLongURL[shortUrl];
