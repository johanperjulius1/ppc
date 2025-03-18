import { getCategoryData } from './categories-utils';

// Assuming 'casino-bonus.md' is the markdown file for the "casino-bonus" category
// Adjust the filename as necessary based on your actual file naming and structure
const casinoMedBonusData = getCategoryData('/casino-med-bonus/casino-med-bonus.md');
const casinoMedBankidData = getCategoryData('/casino-med-bankid/casino-med-bankid.md');
const casinoMedFreeSpinsData = getCategoryData('/casino-med-free-spins/casino-med-free-spins.md');

export { casinoMedBonusData, casinoMedBankidData, casinoMedFreeSpinsData };
