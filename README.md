# Support Tool - Chat Application

## 概要
React(Vite) と TypeScript を使用した、リアルタイムチャットUIのプロトタイプです。
ビジネスPC（事務コン）の保守・サポート業務の効率化を想定したツール開発の第一段階として作成しました。

## 技術スタック
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **State Management**: React Hooks (useState)

## 実装済み機能
- メッセージのリアルタイム送信機能
- 送信者の判定（自分/相手）による左右の出し分けレイアウト
- 空文字送信防止バリデーション
- Tailwind CSS v4 による完全レスポンシブデザイン

## 今後の実装予定
- [ ] メッセージの削除・編集機能
- [ ] Python (FastAPI) を利用したバックエンド連携
- [ ] 過去のチャット履歴の永続化 (IndexedDB / Database)
- [ ] 在庫管理機能との統合