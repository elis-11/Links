----creating-ssh-key-----
$ cd .ssh/
$ mkdir .ssh
$ cd .ssh
$ pwd
$ ssh-keygen
$ ls
$ code .

-----adding-ssh-key-to-github----
$ ssh -T git@github.com
$ git config --global user.email eliza.arzanukaeva@gmail.com
$ git config --global user.name “elis-11”
$ git add .
$ git commit -m “update”
$ git push
