FROM node:20.6-slim

RUN mkdir -p /usr/share/man/man1 && \
  apt update && \
  apt install -y \
  git \
  zsh \
  curl \
  wget \
  fonts-powerline

USER node
WORKDIR /home/node/app

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
  -t https://github.com/romkatv/powerlevel10k \
  -p git \
  -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -p https://github.com/zsh-users/zsh-completions \
  -a 'export TERM=xterm-256color'

RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc && \
  echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc

CMD [ "sh", "-c", "npm i && tail -f /dev/null" ]
