import emojiList from './emojiList.json';

export default function filterEmoji(searchText, maxResults) {
  return emojiList.filter((emoji) => {
    if (emoji.title.includes(searchText)) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
