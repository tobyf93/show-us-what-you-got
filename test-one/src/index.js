import Logger from './helpers/logger';

const logger = new Logger();

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) logger.log('BossHog');
  else if (i % 3 === 0) logger.log('Boss');
  else if (i % 5 === 0) logger.log('Hog');
  else logger.log(i);
}
