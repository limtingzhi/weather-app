const formatDate = function (timestamp: number) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-SG').replace(/\//g, '-');
  const formattedTime = date.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit' });

  return `${formattedDate} ${formattedTime}`;
};

export {
  formatDate,
};
