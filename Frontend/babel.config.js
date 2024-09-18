module.exports = {
  presets: [
    ['@babel/preset-env', { targets: "defaults" }],
    ['@babel/preset-react', { runtime: 'automatic' }]  // 자동 변환을 위한 설정 추가
  ],
};