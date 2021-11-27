## ----creating-ssh-key-----
## $ cd .ssh/
## $ mkdir .ssh
## $ cd .ssh
## $ pwd
## $ ssh-keygen
## $ ls
## $ code .

## -----adding-ssh-key-to-github----
## $ ssh -T git@github.com
## $ git config --global user.email "your-email" 
## $ git config --global user.name "some-name"
## $ git add .
## $ git commit -m "update"
## $ git push
