import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      if (emojiUnicode(emoji.symbol) === (emojiUnicode(searchText))) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

function emojiUnicode (emoji) {
  let comp;
  if (emoji.length === 1) {
      comp = emoji.charCodeAt(0);
  }
  comp = (
      (emoji.charCodeAt(0) - 0xD800) * 0x400
    + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
  );
  if (comp < 0) {
      comp = emoji.charCodeAt(0);
  }
  return comp.toString('16');
};