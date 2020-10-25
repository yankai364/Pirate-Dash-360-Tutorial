# Learn Augmented Reality with Spark AR & Pirate Dash 360
## Learn to create an Augmented Reality Puzzle Filter using Spark AR World Effect, through Pirate Dash 360!

<p align="center"><img src="img/PirateDash360_Tutorial_thumbnail.png" width="70%"/></p>

<p align="center"><i>Submission for Facebook Developer Circles Community Challenge</i></center>
<p align="center">
Team Members: <a href="https://github.com/gabrielkzm">Gabriel Koh</a>, <a href="https://github.com/ngrq123">Ng Rui Qin</a>, <a href="https://github.com/yankai364">Ong Yan Kai</a>, <a href="https://github.com/vncnttkkk">Vincent Tok</a>
</p>

## 1. Introduction

Always wanted to create an immersive Instagram game effect, but not sure how to? We will show you the way! This tutorial will guide you on how to create an Augmented Reality (AR) puzzle game using the Spark AR Studio - no experience required.

It can be daunting to learn a new technology or software, especially for cutting edge technology such as AR. Fret not, we all start somewhere! For us, our journey and foray into this space only commenced during the competition period of the Facebook AR Hackathon, and if we can do it, so can you! 

### a. What Are We Building

We will be re-creating a puzzle game that we did for the Facebook AR Hackathon, called [Pirate Dash 360](https://devpost.com/software/pirate-dash-360). It is an immersive 360° AR puzzle platformer game filter that utilises the phone's back-facing camera. Players guide the pirate to the treasure by swapping directional tiles. 

> Note: We will be creating a simplified, one-level version of Pirate Dash 360.
 
<p align="center"><img src="img/1a.png" width="70%"/></p>

### b. Key Concepts Covered

Through this tutorial, you will learn how to:
- Utilise various features of Spark AR Studio
- Import and customize game assets using Spark AR Studio
- Augment game environment using Spark AR Studio and JavaScript
- Add animations using Spark AR Studio and JavaScript

## 2. Before We Start
### a. Knowledge Prerequisites
- Javascript: https://javascript.info, https://www.json.org/json-en.html

Basic JavaScript knowledge is recommended for this tutorial as it is required for scripting of animations and setting up the scene for the game. Within JavaScript, JavaScript Object Notation (JSON) is a data format which can be used to define the structure of the game. In Pirate Dash 360, it is used to define the tiles required for each level.

### b. Software Prerequisites
- **Spark AR Studio v98**: https://sparkar.facebook.com/ar-studio/download
- **A code editor**, such as Visual Studio Code: https://code.visualstudio.com/download 

### c. Getting Started
<p align="center"><img src="img/2c.png" width="70%"/></p>

To get started, download this repository by selecting **Download ZIP** and save it to a familiar location. Open the **starter** folder.

### d. Understanding Starter Project
[TODO: include file structure pic and explanation]

With a good understanding of the pre-starter project, we can now begin!

## 3. Part 1: Importing and Customizing Game Assets

We will proceed to import and customize the game assets in the Spark AR environment. To simplify this process, please refer to the **/starter/objects** folder for all the relevant game assets that you would require for this section. 

> The objective of this section is to prepare the static assets for subsequent feature implementation i.e creating the augmented environment, implementing game logic and so on. 

### a. Placing Tiles and Pirate in World View
### b. Resizing Objects
### c. Changing the Texture
### d. Grouping Objects (Tile with Directional Arrows and Chest)

## 4. Part 2: Creating the Augmented Environment
### a. Positioning Tiles using Grid System
### b. Level Design
### c. Mapping Spark AR objects to JavaScript objects
### d. Rendering the Level
### e. Selecting Tiles
### f. Swapping Tiles
### g. Shifting the Pirate from One Tile to Another
### h. Starting the Game

## 5. Part 3: Giving Life to the Pirate
### a. Adding Animations
### b. Rotating the Pirate
### c. Starting the Game

## 6. Scaling It Up

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
1. Once you are ready for the filter to go live, click on **Upload and Export** on the leftmost panel.

<p align="center"><img src="img/7_1.png" width="70%"/></p>

2. The file size will be calculated and if it meets the requirement for Facebook (2 MB) and Instagram (4 MB), a green tick stating that it is Ready to Submit will appear. Click on **Export** to export the filter. Save the file on your local PC.

3. Once the file is saved, prepare a demo video (maximum 32 MB) that will help a user understand how the filter can be used. The video can be recorded when you start the preview on Spark AR Studio. Some tips on how to prepare the demo video can be found [here](https://sparkar.facebook.com/ar-studio/learn/publishing/demo-videos-for-instagram-effects/#demo-video-recommendations).

4. Also, prepare a mini icon that represents the filter (minimum 200 x 200 pixels).

5. Head to https://www.facebook.com/sparkarhub/ and log into your Facebook/Instagram account to access the Spark AR Hub dashboard. Click on **Publish an Effect** on the left panel.

<p align="center"><img src="img/7_2.png" width="70%"/></p>

6. Fill in a name for the effect, and upload the AR Project file you saved earlier. Choose the platform that you want to publish the effect to, and select the owner and Instagram account (if Instagram is selected) associated with this effect. You may also add up to 20 keywords that are related to the effect, so that other users can find your filter easily.

<p align="center"><img src="img/7_3.png" width="70%"/></p>

7. Once everything is filled up, hit on **Submit**!

<p align="center"><img src="img/7_4.png" width="70%"/></p>

And that’s it! You will receive a notification when your filter is approved. 

## 8. What's Next - Developing your own filter
The skills that you have picked up through our tutorial can be used to develop different applications such as: 
- Rush Hour or Unblock Me 
- Bejeweled or Candy Crush
- Otello
- Go
- Checkers

<p align="center"><img src="img/8.png" width="70%"/></p>

Or anything creative/new that you might think of, just like **Pirate Dash 360**!
> Note: Make sure to check for any copyright infringements before developing new versions of existing games.

## 9. References

