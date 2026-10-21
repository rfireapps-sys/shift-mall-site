---
name: design-references
description: シフトモールのサイト・ロゴ・バナー・背景などのデザインを作る、直す、評価するときに使う。読み込み済みのデザイン本(ロゴのかたち／ロゴのつくりかたアイデア帖／ロゴデザインの教科書／Webデザイン良質見本帖)の要約を、場面ごとに該当ファイルへ案内する。ロゴ案、配色、レイアウト、見出し・ボタン・ヘッダー・フッターなどのパーツ設計、トレンド技法の判断で参照する。
---

# デザイン参考資料の早見表

本の要約は `references/` にある。**デザインの判断をする前に、下の表で場面に合うファイルを選び、そのファイルを読んでから判断する**（記憶や一般論で済ませない）。1回の作業で読むのは該当ファイルだけでよい。全部は読まない。

## 使い方のルール

- デザインの要素ごとに根拠を付ける（CLAUDE.md の規則）。根拠にこれらの本を使ったら、**ファイル名とページ／IDEA番号／PART番号**を出典として書く。
- 本の内容は要約。ページ番号や実例名は要約に載っているものだけを使う。載っていないことを本の内容として語らない。
- ロゴは勝手に確定させない。ロゴのヒアリングの進捗はメモリ（`project_logo_hearing_process.md`）を見る。

## ロゴ

| 場面 | 読むファイル |
|---|---|
| ロゴ全般の考え方、図形の組み合わせ表、具象イメージ表、ネガティブスペースの実例 | `references/logo-practical-examples.md` |
| 発想法の一覧と、シェイプを一項目ずつ変えて検証する手順（IDEA 01〜08） | `references/logo-katachi-1-techniques.md` |
| 発想法の実例 IDEA 09〜25（プレゼン資料・検証の細分化・既成フォントのコラム含む） | `references/logo-katachi-2-idea09-25.md` |
| 発想法の実例 IDEA 26〜45（複数案提案・黄金比／白銀比のコラム含む。IDEA 35のみ未入手） | `references/logo-katachi-3-idea26-45.md` |
| 発想法の実例 IDEA 46〜62（印刷して比較・アイデアの絞り出しのコラム含む） | `references/logo-katachi-4-idea46-62.md` |
| 発想法の実例 IDEA 63〜70（最後の章。アナログ筆記具のコラム含む） | `references/logo-katachi-5-idea63-70.md` |
| 図形の組み合わせ・重ねる（依頼→キーワード→アイデア→デザイン→完成の流れ。実践10〜22） | `references/logo-ideacho-1-shapes.md` |
| 文字で図を作る／省略／重ねる／反転／記号化／対称／回転／比率／不定形（実践23〜38） | `references/logo-ideacho-2-letters-symbols.md` |
| ロゴタイプ：文字を動かす／カット／つなげる／角を丸く／線で文字を作る（実践39〜60） | `references/logo-ideacho-3-logotype.md` |
| 使いやすいロゴ：視認性・バリエーション・CMYK/RGB・ガイドライン（実践61〜65）。アプリアイコンの縮小確認にも | `references/logo-ideacho-4-usability.md` |

## サイト・UI

| 場面 | 読むファイル |
|---|---|
| 印象語（シンプル・ナチュラル・クール・堅実・男性的など）から配色・書体・技法を決める | `references/web-mihoncho-1-impression.md` |
| 色ごとの配色実例、EC／コーポレート／LPサイトの型 | `references/web-mihoncho-2-color-industry.md` |
| レイアウトの型（グリッド／カード／1カラム／2カラム／フルスクリーン）、写真・切り抜き・テクスチャ・タイポ・動画・インフォグラフィック・アイコン | `references/web-mihoncho-3-layout-parts.md` |
| トレンド技法（3D／グラスモーフィズム／パララックス等）と、ヘッダー／グロナビ／見出し／ボタン／ローディング／フッター／フォームの実例 | `references/web-mihoncho-4-trends-ui.md` |

## 場面からの逆引き

- 新しいセクションを足す → `web-mihoncho-3` → 見出し・ボタンなら `web-mihoncho-4`
- 配色を変える／足す → `web-mihoncho-1`、`web-mihoncho-2`
- ヘッダー・フッター・ボタンを直す → `web-mihoncho-4`
- ロゴ案を出す → `logo-practical-examples` → 発想法は `logo-katachi-*` と `logo-ideacho-1〜2`
- ロゴタイプ（文字）を作る → `logo-ideacho-3`
- アイコンや小さいサイズの見え方を確認する → `logo-ideacho-4`

## 補足

- CLAUDE.md の「デザイン参考資料からの学び」は、これらの本の要点をさらに短くまとめたもの。細かい根拠が要るときはこのスキルのファイルに戻る。
- Z世代マーケティングの読書メモはデザインの本ではないので、このスキルには入れていない（メモリの `reference_zgen_marketing_notes.md`）。
