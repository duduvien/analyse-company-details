import * as rawGoodEmotions from '../../data/goodCompaniesEmotions';
import * as rawBadEmotions from '../../data/badCompaniesEmotions';

const GOOD_EMOTIONS = ['happy', 'excited'];
const BAD_EMOTIONS = ['bored', 'sarcasm', 'sad', 'fear', 'angry'];

const formatAndSortEmotions = (emotions, isGood) => {
    let prioritizeEmotions = [];
    let lastEmotions = [];
    Object.keys(emotions).forEach(key => {
        const emotion = {
            type: key,
            count: emotions[key]
        };
        let isPrioritize = false;
        if (isGood) {
            isPrioritize = GOOD_EMOTIONS.indexOf(key) > -1
        } else {
            isPrioritize = BAD_EMOTIONS.indexOf(key) > -1
        }
        
        if (isPrioritize && prioritizeEmotions.length < 3) {
            prioritizeEmotions.push(emotion);
        } else {
            // lastEmotions.push(emotion)
        }
    });

    const sortEmotionCountDesc = (emotions) => emotions.sort((previous, next) => {
        if (next.count > previous.count) {
            return 1;
        } else if (next.count === previous.count) {
            return 0;
        } else {
            return -1;
        }
    });
    prioritizeEmotions = sortEmotionCountDesc(prioritizeEmotions);
    lastEmotions = sortEmotionCountDesc(lastEmotions);
    return [...prioritizeEmotions, ...lastEmotions];
};

const calculateEmotionsPercentage = (formattedEmotions) => {
    const allCounts = formattedEmotions.reduce((accumlator, emotion) => {
        return accumlator + emotion.count;
    }, 0);
    const emotionsWithPercentage = formattedEmotions.map((emotion) => {
        return {...emotion, percentage: emotion.count/allCounts*100};
    })
    return emotionsWithPercentage;
}

export const goodEmotions = calculateEmotionsPercentage(formatAndSortEmotions(rawGoodEmotions['emotion'], true));
export const badEmotions = calculateEmotionsPercentage(formatAndSortEmotions(rawBadEmotions['emotion'], false));

console.log(goodEmotions);