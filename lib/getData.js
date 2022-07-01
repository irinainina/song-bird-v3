const getBirdData = (birdsData, questionId, cardId) => {
  const birdData = birdsData.filter(
    (el) => el.questionNumber === questionId && el.cardNumber === cardId
  );
  return birdData;  
};

export const getImg = (birdsData, questionId, cardId) => {
  const birdData = getBirdData(birdsData, questionId, cardId);  
  const imgKey = birdData[0].image.asset._ref
    .replace(/image-/, '')
    .replace(/-jpg/, '');
  const imgSrc = `https://cdn.sanity.io/images/j8ax0x9h/production/${imgKey}.jpg`;
  return imgSrc;
};

export const getAudio = (birdsData, questionId, cardId) => {
  const birdData = getBirdData(birdsData, questionId, cardId);
  const audioKey = birdData[0].audio.asset._ref
    .replace(/file-/, '')
    .replace(/-mp3/, '');
  const audioSrc = `https://cdn.sanity.io/files/j8ax0x9h/production/${audioKey}.mp3`;
  return audioSrc;
};

export const getValue = (birdsData, questionId, cardId, value, lang) => {
  const birdData = getBirdData(birdsData, questionId, cardId);
  const langValue = lang ? value + lang.toUpperCase() : value;
  return birdData[0][langValue];
};
