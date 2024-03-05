# ベースイメージを指定。Node.jsの公式イメージを使用
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./
COPY src/server/prisma ./src/server/prisma

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# 環境変数を設定
ENV NODE_OPTIONS="--max-old-space-size=1024"

# アプリケーションをビルド
RUN npm run build

# アプリケーションを起動
CMD ["npm", "run", "start"]
