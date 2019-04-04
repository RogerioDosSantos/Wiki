# COM/DCOM

## How-to 

### Consume COM library without using the registry 

- You LoadLibrary the DLL

- You GetProcAddress its DllGetClassObject
	- Make sure you're in the correct apartment before calling DllGetClassObject 

- You call DllGetClassObject to obtain IClassFactory pointer for CLSID of interest

- You are good to go with IClassFactory::CreateInstance and instantiate the coclass

