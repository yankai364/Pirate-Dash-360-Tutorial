# **Learn Augmented Reality with Spark AR & Pirate Dash 360**

## Create an Augmented Reality Puzzle Using Spark AR World Effect, through Pirate Dash 360!

<div>
    <p align="center"><img src="img/PirateDash360_Tutorial_thumbnail.png" width="60%"/></p>
    <p align="center"><i>Submission for Facebook Developer Circles Community Challenge</i></center>
    <p align="center">
    Team Members: <a href="https://github.com/gabrielkzm">Gabriel Koh</a>, <a href="https://github.com/ngrq123">Ng Rui Qin</a>, <a href="https://github.com/yankai364">Ong Yan Kai</a>, <a href="https://github.com/vncnttkkk">Vincent Tok</a>
    </p>
</div>

## **Table of Contents**
---
TODO: Should we do this?

TODO: Wanna add badges?

TODO: Wanna add emojis?

## 1. **Introduction**
---
Always wanted to create an immersive Instagram game effect, but not sure how to? We will show you the way! This tutorial will guide you on how to create an Augmented Reality (AR) puzzle game using the Spark AR Studio - no experience required.

It can be daunting to learn a new technology or software, especially for cutting edge technology such as AR. Fret not, we all start somewhere! For us, our journey and foray into this space only commenced during the competition period of the Facebook AR Hackathon, and if we can do it, so can you! 

### **1.1. What Are We Building**

We will be re-creating a puzzle game that we did for the Facebook AR Hackathon, called [Pirate Dash 360](https://devpost.com/software/pirate-dash-360). It is an immersive 360° AR puzzle platformer game filter that utilises the phone's back-facing camera. Players guide the pirate to the treasure by swapping directional tiles. 

> Note: We will be creating a simplified, one-level version of Pirate Dash 360.
 
<p align="center"><img src="img/1a.png" width="25%" height="25%"/></p>

### **1.2. Key Concepts Covered**

Through this tutorial, you will learn how to:
- Utilise various features of Spark AR Studio
- Import and customize game assets using Spark AR Studio
- Augment game environment using Spark AR Studio and JavaScript
- Add animations using Spark AR Studio and JavaScript

## 2. **Before We Start**
---

### **2.1. Knowledge Prerequisites**
- Javascript: https://javascript.info, https://www.json.org/json-en.html

Basic JavaScript knowledge is recommended for this tutorial as it is required for scripting of animations and setting up the scene for the game. Within JavaScript, JavaScript Object Notation (JSON) is a data format which can be used to define the structure of the game. In Pirate Dash 360, it is used to define the tiles required for each level.

### **2.2. Software Prerequisites**
- **Spark AR Studio v98**: https://sparkar.facebook.com/ar-studio/download
- **A code editor**, such as Visual Studio Code: https://code.visualstudio.com/download 

### **2.3. Getting Started**
<p align="center"><img src="img/2c.png" width="40%"/></p>

To get started, download this repository by selecting **Download ZIP** and save it to a familiar location. Open the **starter** folder.

### **2.4. Understanding Starter Project**
[TODO: include file structure pic and explanation]

With a good understanding of the pre-starter project, we can now begin!

## 3. **Part 1: Importing and Customizing Game Assets**
---
We will proceed to import and customize the game assets in the Spark AR environment. To simplify this process, please refer to the `/starter/objects` folder for all the relevant game assets that you would require for this section. 

> The objective of this section is to prepare the static assets for subsequent feature implementation i.e creating the augmented environment, implementing game logic and so on. 

### **3.1. Placing Tiles and Pirate in World View**

First, we need to import the relevant assets into Spark AR Studio.

<details><summary>Show Instructions</summary>

1. Open Spark AR Studio.
   
2. On the left navigation pane, click **Open** and open `/starter/starter.arproj` to open the project.
   
3. From here you can view the Scene environment that we will be working with. Proceed to import the pirate object:
   
4. Click **+Add Asset** on the bottom left of the side navigation drawer, followed by **Import From Computer....** Select file `/starter/objects/pirate/scene.gltf` to import the Pirate asset.
   
5. Repeat Step 3 for `/treasure-chest/chest-anim.fbx`, `/tile/blockHalf.fbx` and `/directions/scene.gltf` under `/starter/objects` to import tiles, directions and treasure assets. You should see the following:

<p align="center"><img src="img/assets_file_structure.jpg" width="30%"/></p>

6. Next, drag the **3d Sidescroller Little Pirate** (pirate), **chest-anim** (treasure chest), **blockHalf** (tile), **Chevron** (direction) from the **Assets** category into the **Plane Tracker planeTracker0**. You should be able to see the following:

<p align="center"><img src="img/assets_world_view.jpg" width="50%"/></p>

</details>

### **3.2. Resizing Objects**

Now that we have all our assets placed into the Scene environment via the Plane Tracker, the next thing we want to do is to re-size them.

<details><summary>Show Instructions</summary>

1. Proceed to click on **3d Sidescroller Little Pirate** under **planeTracker0**, you will see a navigation pane showing up on the right hand side of Spark AR Studio. You may adjust the size of the 3D object via the **x, y, z** coordinates under **Scale** section. For the pirate object, kindly use the following coordinate values: **x = 0.07, y = 0.07, z = 0.07**.

2. Do the following for the **chest-anim**, **blockHalf**, and **Chevron** object, based on the coordinates given below:

    Asset | x | y | z
    ------------ | ------------- | ------------- | -------------
    blockHalf | 1 | 1 | 1
    Cheveron | 0.5 | 0.7 | 0.5
    chest-anim | 1.21876 | 1.36885 | 1.09586

    Afterwhich, you should be able to see the following:

<p align="center"><img src="img/assets_resized.jpg" width="100%"/></p>

*Size of all assets changed, however, only properties of pirate can be seen in the screenshot.*

</details>

### **3.3. Changing the Texture**

Finally, we are done with placing and resizing our assets. To opt for your very own design, you can choose to whichever texture and color you prefer. In order to change the textures, select the object under **Assets**. You will notice the right navigation pane showing, proceed to choose from the available textures and colors under **Albedo**. For this tutorial, we will proceed to change the color of **direction** to yellow.

<details><summary>Show Instructions</summary>

1. Click on **Chevron → Scene_-_Root** under **Assets**.
2. Under **Albedo → Texture**, click the dropdown and remove any texture.
3. Click **Color**, and select a color of your preference, in the project, we decided on Yellow.

</details>

### **3.4. Creating Different Directions for Cheverons (Up, Left, Right)**

As our current **Chevron** is only oriented in one direction, we need to create three different chevrons with different orientations. We can do this by adjusting its rotation.

<details><summary>Show Instructions</summary>

1. Start off by renaming **Chevron** under **planeTracker0** to **chevron_up**.
2. Make two more copies of **chevron_up** and rename it to **chevron_right**, **chevron_left**.
3. Click on **chevron_up**, in the right navigation bar, adjust values in **Rotation**: **x = -90, y = 0, z = -179**.
4. Repeat *Step 3* for **chevron_right** and **chevron_left** using the details from the following table.

    Asset | x | y | z
    ------------ | ------------- | ------------- | -------------
    chevron_right | 90 | -90 | -180
    chevron_left | -90 | -90 | -180

    You should be able to see the following:
<p align="center"><img src="img/assets_multiple_directions.jpg" width="100%"/></p>

*Rotations of all assets changed, however only properties of chevron_left can be seen in screenshot.*

</details>

### **3.5. Grouping Objects, Organizing Structure and Final Adjustments**

This section emcompasses the concept of grouping different objects together, as well as organizing them in the correct structure. You may have noticed that certain objects like the Pirate are in fact a group of objects. In this tutorial, we need to group tiles with directions, as well as tiles with treasure.

<details><summary>Show Instructions</summary>

1. Right click **planeTracker0**, select **Add** and click **Create a Null Object**, naming it **level1**.
2. Make a copy of **blockHalf**.
3. Rename **blockHalf** to **tile1** and drag the **chevron_right** object into **tile1**.
4. Rename **blockHalf0** to **blockHalf**
5. Drag **tile1** into **level1**
6. Adjust **tile1** **Scale** to **x = 0.09, y = 0.12, z = 0.09**.
7. Adjust **tile1 → chevron_right Scale** to **0.5**, **0.7** and **0.5** for **x**, **y** and **z** respectively.
8. Adjust **tile1 → chevron_right Position** to **-0.27349**, **0.71012** and **0.85518** for **x**, **y**, and **z** respectively. 
9. Repeat *Steps 2 to 8* for **chevron_up** and **chevron_left**, naming them **tile3** and **tile5** respectively, instead of **tile1** for *Step 4*. Refer to the details for the different positions for *Step 8* based on the table below:

    Assets | x | y | z
    ------------ | ------------- | ------------- | -------------
    chevron_up | -0.82373 | 0.89036 | 0.28953
    chevron_left | -1.312 | 0.88182 | 0.85518

1.  Repeat *Steps 2 to 8* for **chest-anim**, naming it **tileEnd** instead of **tile1** for *Step 4*. Refer to the following for values on *Step 7, 8*:
    
    Properties | x | y | z
    ------------ | ------------- | ------------- | -------------
    Scale | 1.21876 | 1.36885 | 1.09586
    Position | -0.7808 | 0.71012 | 0.85518

2.  Navigate to **tileEnd → chest-anim** and delete the **Sand** object.
3.  Rename **chest-anim** to **treasure**.
    
You should be able to see the following:
<p align="center"><img src="img/tiles.jpg" width="100%"/></p>

13. Make duplicates of relevant tiles and rename them accordingly to conclude this section, before moving to augmenting the environment with javascript. Refer to the table below for the finalised details on duplication and renaming of tiles.
    
    Tile Name | Chevron Type/Treasure in Tile
    ------------ | -------------
    tile1 | chevron_right
    tile2 | chevron_right
    tile3 | chevron_up
    tile4 | chevron_up
    tile5 | chevron_left
    tile6 | chevron_left
    tile7 | chevron_right
    tile8 | chevron_right
    tile9 | chevron_right
    tileStart | chevron_right
    tileEnd | treasure

14. Rename **3d Sidescroller Little Pirate** to **pirate**.
    
15. Drag **pirate** into **level1**.
    
16. Delete **blockHalf**.
    
17. Change the coordinates of **level1** to **x = 0, y = 0.3, z = -1**. Do note that the positioning of the objects within the scene does not matter at this point in time *(it is okay to see objects all over the place in the scene)*.
    
You should be able to see the following:
<p align="center"><img src="img/final_tiles.jpg" width="30%"/></p>

18.  Finally, under **Assets → chest-anim**, delete the following: **Hole, Sand, Texture 1, 2, 4, 5, 6, 7, 8, 9, 12, 13**. This is done to shrink the project size, abiding by size restrictions for publishing of game in the later stages.

</details>

## 4. Part 2: Creating the Augmented Environment
---
### a. Positioning Tiles using Grid System
### b. Level Design
### c. Mapping Spark AR objects to JavaScript objects
### d. Rendering the Level
### e. Selecting Tiles
### f. Swapping Tiles
### g. Shifting the Pirate from One Tile to Another
### h. Starting the Game

## 5. Part 3: Giving Life to the Pirate
---
### a. Adding Animations
### b. Rotating the Pirate
### c. Starting the Game

## 6. Scaling It Up
---
Congratulations! You have picked up the necessary skills and concepts to develop your own puzzle filter. However, there is more that can be done to make the game more fun and exciting. If you are looking to take up the challenge, we have two tasks prepared for you.

> Note: At any time that you are stuck on these challenges, you can refer to our Pirate Dash 360 repository.

### a. Challenge 1: Creating Multiple Levels
To introduce a 360 degree experience in the game, one could opt to create multiple levels, surrounding the player in question. An illustration can be seen below:

[TODO: Add in different levels]

In order to facilitate multiple levels, you could use a JSON file to pre-customize the setups of the different levels.

### b. Challenge 2: Adding Multiple Worlds

For **Pirate Dash 360**, we implemented three different themes - Grass World, Snow World, Desert World - to vary the level of difficulty of the game.

<p align="center"><img src="img/6b.png" width="70%"/></p>

If you wish to add multiple themes as well, you can implement a native UI slider, reflecting different worlds and themes in the game. You can check out the [Native UI Slider Tutorial](https://sparkar.facebook.com/ar-studio/learn/tutorials/native-ui-slider/)  for more information. 

## 7. Optional: Publishing the Filter 
---
1. Once you are ready for the filter to go live, click on **Upload and Export** on the leftmost panel.

<p align="center"><img src="img/7_1.png" width="50%"/></p>

2. The file size will be calculated and if it meets the requirement for Facebook (2 MB) and Instagram (4 MB), a green tick stating that it is Ready to Submit will appear. Click on **Export** to export the filter. Save the file on your local PC.

3. Once the file is saved, prepare a demo video (maximum 32 MB) that will help a user understand how the filter can be used. The video can be recorded when you start the preview on Spark AR Studio. Some tips on how to prepare the demo video can be found [here](https://sparkar.facebook.com/ar-studio/learn/publishing/demo-videos-for-instagram-effects/#demo-video-recommendations).

4. Also, prepare a mini icon that represents the filter (minimum 200 x 200 pixels).

5. Head to https://www.facebook.com/sparkarhub/ and log into your Facebook/Instagram account to access the Spark AR Hub dashboard. Click on **Publish an Effect** on the left panel.

<p align="center"><img src="img/7_2.png" width="30%"/></p>

6. Fill in a name for the effect, and upload the AR Project file you saved earlier. Choose the platform that you want to publish the effect to, and select the owner and Instagram account (if Instagram is selected) associated with this effect. You may also add up to 20 keywords that are related to the effect, so that other users can find your filter easily.

<p align="center"><img src="img/7_3.png" width="70%"/></p>

7. Once everything is filled up, hit on **Submit**!

<p align="center"><img src="img/7_4.png" width="70%"/></p>

And that’s it! You will receive a notification when your filter is approved. 

## 8. What's Next - Developing your own filter
---
The skills that you have picked up through our tutorial can be used to develop your own applications. You may draw inspirations from:
- Rush Hour or Unblock Me 
- Bejeweled or Candy Crush
- Otello
- Go
- Checkers

<p align="center"><img src="img/8.png" width="70%"/></p>

Or anything creative/new that you might think of, just like **Pirate Dash 360**!
> Note: Make sure to check for any copyright infringements before developing new versions of existing games.

## 9. Appendix, References, Credits
---

### **9.1. Spark AR Studio Fundamentals**
- [Using Spark AR Studio](https://sparkar.facebook.com/ar-studio/learn/articles/fundamentals/navigating-the-interface)

### **9.2. Importing and Customising Game Assets**
- [Adding Objects and Assets](https://sparkar.facebook.com/ar-studio/learn/articles/fundamentals/adding-objects-and-assets/#how-objects-and-assets-work-together)

- [Working with Textures and Materials](https://sparkar.facebook.com/ar-studio/learn/tutorials/working-with-textures-and-materials/#creating-material)

### **9.3. Creating the Augmented Environment**
- [Scripting Basics](https://sparkar.facebook.com/ar-studio/learn/scripting/scripting-basics#creating-a-script)

- [SparkAR API/Modules Documentation](https://sparkar.facebook.com/ar-studio/learn/reference/scripting/summary)

### **9.4. Animating the Pirate**

- [Animating 3D Objects](https://sparkar.facebook.com/ar-studio/learn/tutorials/3d-objects-animation/)

- [Patch Editor](https://sparkar.facebook.com/ar-studio/learn/patch-editor)

- [Script to Patch Editor Bridging](https://sparkar.facebook.com/ar-studio/learn/patch-editor/bridging)

### **9.4. Adding Multiple Worlds**

- [Native UI Slider](https://sparkar.facebook.com/ar-studio/learn/tutorials/native-ui-slider/)

- [Creating World Effects](https://sparkar.facebook.com/ar-studio/learn/tutorials/particle-world-effect)

### **9.5 Publishing Filter**

### **9.6 Game Assets and Sound Effects**

- [SketchFab](https://sketchfab.com)
- [Kenney](https://www.kenney.nl/assets)
- [Quaternius.Itch.IO](https://quaternius.itch.io)
- Facebook Sound Design
- Global Genius

---
*Last Updated on 26 October 2020*
