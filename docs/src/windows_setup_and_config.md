# Windows Setup and Configuration

## How to

### Windows 10 - Use other computer as an additional monitor

In the computer that will serve as the additional monitor (Monitor Computer):

- Go to `Windows Settings >> System >> Projecting to this PC` and configure the security options you would like. E.g.: *Available everywhere*, *Every time a conection is available*. 

![](http://tinyurl.com/y45otjck)

In the computer that will use the additional monitor (Host Computer):

- Press `<windows_key> + p`
- Select *Connect to Wirelles display* option
- Select the *Monitor Computer*

**Note**: 

You will need the following port to be available in the *Host Computer*:
- Firewall Inbound Connection
    - 5353 – UDP
    - 7236 – UDP and TCP
    - 7250 – TCP

### Windows 10 - Configure Firewall Rules (Inbound Connection)

- Go to `Windows Defender Firewall >> Advanced Settings >> Inbound Rules >> New Rule`

![](http://tinyurl.com/yxa6u95l)

- Select `Port >> Next >> The Ports you would like to open`


