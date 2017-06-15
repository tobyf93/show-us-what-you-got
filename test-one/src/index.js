import Logger from './helpers/logger';

const logger = new Logger();

const bossHog = (number) => {
  if (number % 15 === 0) return 'BossHog';
  else if (number % 3 === 0) return 'Boss';
  else if (number % 5 === 0) return 'Hog';
  else return number;
};

for (let i = 1; i < 101; i++) {
  logger.log(bossHog(i));
}

export default bossHog;
