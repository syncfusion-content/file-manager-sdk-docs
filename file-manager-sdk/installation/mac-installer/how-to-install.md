---
layout: post
title: Installing Syncfusion File Manager SDK Mac installer - Syncfusion
description: Learn here about how to install Syncfusion File Manager SDK Mac installer after downloading from our Syncfusion website.
platform: file-formats
control: Installation and Deployment
documentation: ug
---

# Installing the Syncfusion File Manager SDK on macOS

## Steps to resolve the warning message in Catalina OS or later

While running the Syncfusion Chart SDK Mac Installer on Catalina macOS or later, the alert below is displayed.

![Catalina macOS Gatekeeper alert](images/Mac_Catalina_MacOS_Alert1.png)

If you receive this alert, follow the steps below for the easiest solution.

1. Right-click the downloaded `.pkg` file in Finder.
2. Select the **Open With** option and choose **Installer (default)**. The pop-up shown below appears.

   ![Open With Installer pop-up](images/Mac_Catalina_MacOS_Alert2.png)

3. Click **Open**. The installer window opens.

## Step-by-Step Installation

The steps below show how to install Essential Studio File Manager SDK Mac installer.

1. Open the Syncfusion Essential Studio File Manager SDK Mac installer(.pkg) file. The installer Wizard opens. Click Continue.

   ![Welcome wizard](images/Mac_Installer1.png)
   

2. The Software License Agreement wizard will appear. Click the Continue button.

   ![License Agreement](images/Mac_Installer2.png)   
   

3. The License Agreement's Confirmation window will appear. If you have read the Software License Agreement, click **Agree**.

   ![License Agree Confirmation](images/Mac_Installer3.png)
   
   N> The Unlock key is not required to install the Essential Studio File Manager SDK Mac installer.


4. The Destination select wizard will appear. You can choose which disc to install the Syncfusion Essential Studio File Manager SDK Mac installer on here.

   ![Destination](images/Mac_Installer5.png)

5. The Installation Type wizard will appear. Click Install to begin the standard installation of the Syncfusion Essential Studio File Manager SDK Mac installer.

   ![Install Location](images/Mac_Installer6.png)

6. The Authentication window will appear. To begin the installation, enter the Mac machine's password and click **Install Software**.

   ![Authentication](images/Mac_Installer7.png)

7. The installation process will begin on your machine. 
   
   ![Installation progress](images/Mac_Installer8.png)
   
8. Once the installation is complete, the completed screen will be displayed. To exit the installation wizard, click Close. 

   ![Installation Complete screen](images/Mac_Installer9.png)

### Default Installation Location

By default, the Mac Installer installs the following files:

* **Demo samples** – ASP.NET Core File Manager SDK sample source.
* **NuGet packages** – Pre-built Syncfusion NuGet packages.
* **Source** – Component source code for advanced scenarios.

```text
Location: {Documents}/Syncfusion/{version}/File Manager SDK
```

Replace `{version}` with the installed Syncfusion version (for example, `26.1.35`). `{Documents}` is the Documents folder of the user who ran the installer.

![Installed location](images/Mac_Installer10.png)

## License key registration in samples

After the installation, the license key is required to register the demo source that is included in the Mac installer. To learn about the steps for license registration for the ASP.NET Core - EJ2 samples in the Essential Studio File Manager SDK Mac installer, please refer to this.

* Register the license key in the [Program.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-60) file if you created the ASP.NET Core web application with Visual Studio 2022 and .NET 6.0.
* Register the license key in Configure method of [Startup.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-50-or-net-31)