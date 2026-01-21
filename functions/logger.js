module.exports = function buildLog(data) {
  return {
    timestamp: new Date().toISOString(),
    sender: data.from,
    message: data.message,
    route: data.route,
    reply: data.reply || null,
  };
};
