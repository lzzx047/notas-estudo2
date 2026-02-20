# notas-estudo2
minhas notas de estudo do tecnico senac 2026


markdown


## Configurando Git

para utilizar o git na minha maquina eu preciso configurar determinados comandos, sendo eles:

```bash
git config --global
```
## como configurar GitHub

## SSH - Como configurar a maquina para GitHub

## Como criar um repositorio 


O Git ferramenta de versionamento local, que salva o estado de cada arquivo na hora do versionamento e caso o arquivo não sofra a alteração ele cria um link simbólico para o arquivo não editado.
Você vai abrir o Terminal de Comando, Shell ou PowerShell e digite git –version
Depois configure também seu git local, com os seguintes comandos.
>git config –global user.name “Seu Nome” 
>git config –global user.email “seuEmail@gmail.com”
Criem uma conta no site oficial do github.
https://github.com/
GitHub - SSH
SSH – GitBash
Verificar se existe chave ssh.
Is -al ~/.ssh
Adicionar uma nova chave. (ID)
Ssh-keygen -t ed25519 -C your_email@example.com
Inicializar agente-ssh.
Eval “$(ssh-agent -s)”
Adicionar a chave ssh ao agente.
Ssh-add ~/.ssh/id_ed25519
SSH – GitBash
Copiar chave ssh.
Clip <~/.ssh/id_ed25519.pub
Adicionar chave no github
Github -> Settings -> SSH and GPG Keys -> new SSH key -> Colar
*Coloque um título que identifique a chave*
Ex: SENAC-SALA-106-PCXPTO
Testar conexão 
ssh -T git@github.com depois escreve “yes”.
PRONTO SEU GIT ESTÁ CONFIGURADO!
Depois disso pra criar um repositório vai no git hub clica na foto de perfil /repositories/new = coloca o nome do repositório /depois de coloca e omfigura para publico/readme/depois de tudo criar repositório
Se não colocar readme vai dar merdaaa
Para ver os repositório só ir na foto de perfil ou se vira  /// 

COISAS QUE O RENAN EXPLICOU
 
PARA FAZER UM REPOSITORIO
-FAÇA UM REPOSITORIO NOVO NO GIT HUB
-VAI NA PASTA DO QUE VOCE CRIOU E VAI LA EM CODIGO E COPIA O SSH
-DEPOIS DISSO VAI LA NO GIT BASH E DIGITA
- $ CD DOCUMENTS/ E CLICA ENTER
-DEPOIS VAI ENTRA ~/DOCUMENTS/= $ GIT CLONE
-DEPOIS DISSO VAI PARA O VS CODE
-VAI LA EM CIMA NO CANTO DIRETO LA EM CIMA
-CLICA EM FILE / OPEN FOLDER
-DEPOIS VAI NA PASTA QUE VOÇÊ CRIOU NO VS CODE
-E PRONTO 
 

