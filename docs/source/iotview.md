IoTView

## Apache Installation and Configuration

`apt-get update --yes && apt-get install --no-install-recommends --yes apache2 -y`: Install Apache

`echo "ServerName localhost" >> /etc/apache2/apache2.conf`: COnfigure Apache to be localhost. 

`service apache2 restart` : Restart Apache
