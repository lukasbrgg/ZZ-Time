echo "update ...";
sudo apt update
echo "install needed packages ...";
sudo apt install apt-transport-https ca-certificates curl software-properties-common
echo "add repository ...";
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
echo "update ...";
sudo apt update
apt-cache policy docker-ce
echo "check if installation worked successfully ...";
sudo systemctl status docker
sudo docker run hello-world
echo "docker-compose ...";
sudo docker-compose up -d