# TFS Client

`"C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE\tf"
vc status /login:Corp\roger.santos /workspace:Roger_01` : Location of the TFS

`tf status /collection:<collection_url> /recursive /login:<use>,<password>` : Get the list of checked out files by one user. E.g.: `tf status /collection:http://swtfsiws.dev.wonderware.com:8080/tfs/InduSoft/ /recursive /login:corp\roger.santos,roger_password`

`tf.exe vc help` : Call the help of the TFS client

`tf.exe vc checkout '<file_path>'` : Checkout a file

`tf.exe vc history /noprompt <file_path>`: Display the history of a file


## How-to

### Install the TFS build agent on the Linux Manchine

[Deploy an agent on Linux](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux?view=vsts)
