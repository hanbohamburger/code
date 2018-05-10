var fs = require("fs");
var imageData = fs.readFileSync('./test.jpg');
var serverData2 = fs.readFileSync('./test2.jpg');

console.log(Buffer.from(imageData));
let encodedMessage = Buffer.from(imageData, 'binary').toString('utf8');
// console.log(encodedMessage);

console.log(Buffer.from(encodedMessage, 'utf8'));
console.log(".........");
console.log(Buffer.from(Buffer.from(serverData2, '7bit'), 'utf8'));
console.log(".........");

let testString = 'LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTU4MjcwNzk1NTIyNzA5MjAwMzUwOTM1Mw0KQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSJmaWxlIjsgZmlsZW5hbWU9Ind4YWVmOTYxNzQwYzlkNDY2Ni5vNnpBSnN6YXZTV3RnajFSbkFQQmJscVE2d0tNLmJBNXM3NG9ENmZHazA5YTZmZTJhN2VmMTRjOTI1MjhmMzYwNWM2NmVjYWFiLmpwZyINCkNvbnRlbnQtVHlwZTogaW1hZ2UvanBlZw0KDQr/2P/gABBKRklGAAEBAABIAEgAAP/hAIxFeGlmAABNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAACQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACQAWAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAQAA//aAAwDAQACEQMRAD8A/pF0b4gfGn4Q2Gs+E/DPxK+KXxKv/jL/AMFEvi38INf8RuP2fLHxV8KdC0/wt8S/iJZy+FJPFPhrwf4AsvE/xF1Pwj4X8D6RF8Qm1PSLaDxBZnwP4ZbV7nSdO1IA7NfjN+094ovfDvgfS/igtvNoniz9obSbvw14F8Wfso3v7XfxI0D4d2fwbGjeJEg8Tf2r+zSJvg54p8d+KPBfx18HaA+iarqF9qPwf8QjXfBIvPFngTVQDR+Cur+Jfjd+0JoPxI0f9rDx9b6R8QP2F/gN4z0+Tw34D+Fvgrw/rNxfeOviLZ65rmh+A/iV4I+IeveF4NS1C1XVtQ0m88SeJ9R0e71iLSZvFOoaLbeHLe3AP//Q/oe/at/5EX/grv8A9dP2dP8A1HNGoA+Ov2uv+UPv7Ef/AGG4P/TD8Q6APsr9sHr+xl/2bV4j/wDeKUAf/9kNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS01ODI3MDc5NTUyMjcwOTIwMDM1MDkzNTMtLQ0K';

console.log(Buffer.from(testString, 'hex').toString())
