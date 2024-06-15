# 1. 베이스 이미지 설정
FROM node:18-alpine

# 2. 작업 디렉토리 설정
WORKDIR /usr/src/app

# 3. 필요한 파일 복사
COPY package*.json ./
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules
COPY components.json ./
COPY jsconfig.json ./
COPY next.config.mjs ./
COPY postcss.config.mjs ./
COPY tailwind.config.js ./
COPY url.js ./

# 4. 종속성 설치
RUN npm install

# 5. 소스 코드 빌드
RUN npm run build

# 6. 환경 변수 설정 (필요에 따라)
# ENV NODE_ENV=production

# 7. 포트 설정
EXPOSE 3000

# 8. 앱 실행
CMD ["npm", "start"]
