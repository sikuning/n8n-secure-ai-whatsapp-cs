module.exports = function decide(aiReply) {
  if (!aiReply || aiReply.includes('ESCALATE')) {
    return { route: 'human' };
  }

  return {
    route: 'ai',
    reply: aiReply,
  };
};
