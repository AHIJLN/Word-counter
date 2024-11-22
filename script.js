// 获取 DOM 元素
const textInput = document.getElementById("textInput");
const chineseCount = document.getElementById("chineseCount");
const englishCount = document.getElementById("englishCount");

// 监听输入框事件
textInput.addEventListener("input", () => {
  const text = textInput.value;

  // 中文字符统计：匹配汉字范围
  const chineseMatches = text.match(/[\u4e00-\u9fa5]/g);
  chineseCount.textContent = chineseMatches ? chineseMatches.length : 0;

  // 英文字母统计：匹配 a-z 或 A-Z
  const englishMatches = text.match(/[a-zA-Z]/g);
  englishCount.textContent = englishMatches ? englishMatches.length : 0;
});
