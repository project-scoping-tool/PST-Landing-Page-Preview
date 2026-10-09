// Generated from assets/assessment_info/*.toml and assets/question_info/*.toml
// in the Flutter app, so the static preview shows the exact same content.
var INSTRUCTIONS_DATA = {
  "stepLabels": [
    "Step 1 — Existing Need",
    "Step 2 — Existing Infrastructure"
  ],
  "jurisdictions": [
    {
      "id": "boulder",
      "name": "Boulder City",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools",
            "questionText": "How many schools (CCSD & private) are in the area and within a ½ mile radius?",
            "useUrl": "Use Clark County Education data",
            "url": "https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978",
            "hint": "(Note: charter schools appear listed as private schools in the data source)",
            "instructionsMarkdown": "* Click on the link for the Clark County Education Data tool, [available here](https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar then press enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear color-coded on the map as indicated in the legend that displays on the right side under “Symbology.” CCSD schools will feature additional labels, including flags and names.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the wrench icon (Map tools) on the right edge of the screen, then click “Measurement.”\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1onJoNn-vEk0OramBu4DhBWFV-WvYCUZi"
          },
          {
            "id": "public-parks",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Clark County data",
            "url": "https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99",
            "hint": "",
            "instructionsMarkdown": "* Click on the Clark County Recreation data link, [available here](https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar that appears, then press enter.\n* Click on the sideways carrot button (>) to the left of  “Recreation” on the left side information bar, and ensure that only the following layers are visible: “Las Vegas Parks,” “Clark County Parks,” “Boulder City Parks,” “Henderson Parks,” “Mesquite Parks,” and “North Las Vegas Parks.” \n  * To hide a layer, click the eye icon next to the three dots for that particular layer. An eye icon with a line through it indicates a hidden layer.\n* Click on “Legend” on the left-hand sidebar to reveal how parks appear on the map.\n* Zoom in and out (as needed) until the map displays about ½ mile in each direction from the project area.\n* To measure distance, click the wrench icon (Map tools) on the right-side toolbar, then click “Measurement.”\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance.\n  * Select “miles” on the drop-down menu for “unit.”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile.\n* Select the answer below that corresponds to the number of parks located within ½ mile of the project area.\n",
            "videoId": "1XGLuqsRHqqnQussFQD1z92VpkI9KJsav"
          },
          {
            "id": "bus-stops-rtc",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": ""
          },
          {
            "id": "bike-lanes-rtc",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "clark-county",
      "name": "Clark County",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools",
            "questionText": "How many schools (CCSD & private) are in the area and within a ½ mile radius?",
            "useUrl": "Use Clark County Education data",
            "url": "https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978",
            "hint": "(Note: charter schools appear listed as private schools in the data source)",
            "instructionsMarkdown": "* Click on the link for the Clark County Education Data tool, [available here](https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar then press enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear color-coded on the map as indicated in the legend that displays on the right side under “Symbology.” CCSD schools will feature additional labels, including flags and names.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the wrench icon (Map tools) on the right edge of the screen, then click “Measurement.”\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1onJoNn-vEk0OramBu4DhBWFV-WvYCUZi"
          },
          {
            "id": "public-parks",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Clark County data",
            "url": "https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99",
            "hint": "",
            "instructionsMarkdown": "* Click on the Clark County Recreation data link, [available here](https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar that appears, then press enter.\n* Click on the sideways carrot button (>) to the left of  “Recreation” on the left side information bar, and ensure that only the following layers are visible: “Las Vegas Parks,” “Clark County Parks,” “Boulder City Parks,” “Henderson Parks,” “Mesquite Parks,” and “North Las Vegas Parks.” \n  * To hide a layer, click the eye icon next to the three dots for that particular layer. An eye icon with a line through it indicates a hidden layer.\n* Click on “Legend” on the left-hand sidebar to reveal how parks appear on the map.\n* Zoom in and out (as needed) until the map displays about ½ mile in each direction from the project area.\n* To measure distance, click the wrench icon (Map tools) on the right-side toolbar, then click “Measurement.”\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance.\n  * Select “miles” on the drop-down menu for “unit.”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile.\n* Select the answer below that corresponds to the number of parks located within ½ mile of the project area.\n",
            "videoId": "1XGLuqsRHqqnQussFQD1z92VpkI9KJsav"
          },
          {
            "id": "bus-stops-rtc",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": ""
          },
          {
            "id": "bike-lanes-rtc",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "henderson",
      "name": "City of Henderson",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools",
            "questionText": "How many schools (CCSD & private) are in the area and within a ½ mile radius?",
            "useUrl": "Use Clark County Education data",
            "url": "https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978",
            "hint": "(Note: charter schools appear listed as private schools in the data source)",
            "instructionsMarkdown": "* Click on the link for the Clark County Education Data tool, [available here](https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar then press enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear color-coded on the map as indicated in the legend that displays on the right side under “Symbology.” CCSD schools will feature additional labels, including flags and names.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the wrench icon (Map tools) on the right edge of the screen, then click “Measurement.”\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1onJoNn-vEk0OramBu4DhBWFV-WvYCUZi"
          },
          {
            "id": "public-parks",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Clark County data",
            "url": "https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99",
            "hint": "",
            "instructionsMarkdown": "* Click on the Clark County Recreation data link, [available here](https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar that appears, then press enter.\n* Click on the sideways carrot button (>) to the left of  “Recreation” on the left side information bar, and ensure that only the following layers are visible: “Las Vegas Parks,” “Clark County Parks,” “Boulder City Parks,” “Henderson Parks,” “Mesquite Parks,” and “North Las Vegas Parks.” \n  * To hide a layer, click the eye icon next to the three dots for that particular layer. An eye icon with a line through it indicates a hidden layer.\n* Click on “Legend” on the left-hand sidebar to reveal how parks appear on the map.\n* Zoom in and out (as needed) until the map displays about ½ mile in each direction from the project area.\n* To measure distance, click the wrench icon (Map tools) on the right-side toolbar, then click “Measurement.”\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance.\n  * Select “miles” on the drop-down menu for “unit.”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile.\n* Select the answer below that corresponds to the number of parks located within ½ mile of the project area.\n",
            "videoId": "1XGLuqsRHqqnQussFQD1z92VpkI9KJsav"
          },
          {
            "id": "bus-stops-rtc",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": ""
          },
          {
            "id": "bike-lanes-henderson",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "las-vegas",
      "name": "City of Las Vegas",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools-las-vegas",
            "questionText": "How many schools (CCSD, private, or charter) are in the area and within ½ mile radius?",
            "useUrl": "Use City of Las Vegas data",
            "url": "https://experience.arcgis.com/experience/50802b61584341ad8096b907621c48be/?draft=true&org=lasvegas",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the City of Las Vegas Interactive Map, [available here](https://experience.arcgis.com/experience/50802b61584341ad8096b907621c48be/?draft=true&org=lasvegas).\n* Click “OK” on the opening disclaimer, if it appears.\n* Click on the “Community Services” option on the left sidebar\n* Check the “CCSD Schools” and the “CLV Private Schools” options.\n* Enter the address of the project area into the search bar at the top of the map then hit enter. \n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear coded on the map to indicate their locations. The coding legends can be viewed by clicking on the “legend” icon next to the selected options.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the ruler icon (Map tools) on the top left of the map window\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1MiCkMtztziIst0ytbsH-ehMznBZ-omS-"
          },
          {
            "id": "public-parks-las-vegas",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use City of Las Vegas data",
            "url": "https://experience.arcgis.com/experience/50802b61584341ad8096b907621c48be/?draft=true&org=lasvegas",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the City of Las Vegas Interactive Map, [available here](https://experience.arcgis.com/experience/50802b61584341ad8096b907621c48be/?draft=true&org=lasvegas).\n* Click “OK” on the opening disclaimer, if it appears.\n* Click on the “Right of Way” option on the left sidebar.\n* Check the “Parks” option.\n* Enter the address of the project area into the search bar at the top of the map then hit enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Parks will appear color-coded on the map to indicate their locations. The legend can be viewed by clicking on the “legend” icon next to the Park option.\n* Zoom in and out as needed to see parks within ½ mile radius\n* To measure distance, click the ruler icon (Map tools) on the top left of the map window\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile\n  * Select the answer below that corresponds to the number of parks located within ½ mile of the project area",
            "videoId": "1z0SggrAJjU89Xyvv7NCf9W2AtG8a5z9v"
          },
          {
            "id": "bus-stops-rtc",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": ""
          },
          {
            "id": "bike-lanes-rtc",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "mesquite",
      "name": "City of Mesquite",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools",
            "questionText": "How many schools (CCSD & private) are in the area and within a ½ mile radius?",
            "useUrl": "Use Clark County Education data",
            "url": "https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978",
            "hint": "(Note: charter schools appear listed as private schools in the data source)",
            "instructionsMarkdown": "* Click on the link for the Clark County Education Data tool, [available here](https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar then press enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear color-coded on the map as indicated in the legend that displays on the right side under “Symbology.” CCSD schools will feature additional labels, including flags and names.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the wrench icon (Map tools) on the right edge of the screen, then click “Measurement.”\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1onJoNn-vEk0OramBu4DhBWFV-WvYCUZi"
          },
          {
            "id": "public-parks",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Clark County data",
            "url": "https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99",
            "hint": "",
            "instructionsMarkdown": "* Click on the Clark County Recreation data link, [available here](https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar that appears, then press enter.\n* Click on the sideways carrot button (>) to the left of  “Recreation” on the left side information bar, and ensure that only the following layers are visible: “Las Vegas Parks,” “Clark County Parks,” “Boulder City Parks,” “Henderson Parks,” “Mesquite Parks,” and “North Las Vegas Parks.” \n  * To hide a layer, click the eye icon next to the three dots for that particular layer. An eye icon with a line through it indicates a hidden layer.\n* Click on “Legend” on the left-hand sidebar to reveal how parks appear on the map.\n* Zoom in and out (as needed) until the map displays about ½ mile in each direction from the project area.\n* To measure distance, click the wrench icon (Map tools) on the right-side toolbar, then click “Measurement.”\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance.\n  * Select “miles” on the drop-down menu for “unit.”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile.\n* Select the answer below that corresponds to the number of parks located within ½ mile of the project area.\n",
            "videoId": "1XGLuqsRHqqnQussFQD1z92VpkI9KJsav"
          },
          {
            "id": "bus-stops-google-earth",
            "questionText": "How many bus stops are within ¼ mile radius?",
            "useUrl": "Go to Google Earth",
            "url": "https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r",
            "hint": "",
            "instructionsMarkdown": "* Click on the Google Earth link, available [here](https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r).\n* In the search box above the map view on the top left of the screen, enter the address for the project area.\n* Click the “Save to project” text\n  * A small window will pop up. Select “Local KML file” to save the marker on the selected address.\n  * Click “Save to project” again to mark the location.\n* Click “View” text at the top of the search bar, then select “Basemap settings”.\n  * In the pop-up window, scroll to “Details” and choose “Everything” to display bus stops with bus symbols that will appear on the map.\n* Zoom in and out (as needed) until the map displays about 1/4 mile in each direction from the project area. \n* Click the “Measurement” icon (a ruler)\n  * Click on a point in the project area and then drag the measurement line to the nearest part of the bus stop symbol to reveal the distance. A quarter-mile is 1,320 feet.\n  * Continue this process until it is clear if there are  0 or 1 or more bus stops within 1/4 mile. If there is at least 1 bus stop within ¼ mile, select option “1 or more”; if there are no bus stops within ¼ mile, select option “0.”",
            "videoId": "19WI6ACt149qL5G6ONZwZXlLELEggYdRZ"
          },
          {
            "id": "bike-lanes-rtc",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "north-las-vegas",
      "name": "City of North Las Vegas",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_011E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Blues&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_011E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data,",
            "url": "https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32003$14000,32003$1400000/ACSST5Y2020/S0801/S0801_C01_010E?q=S0801&layer=VT_2020_140_00_PY_D1&palette=Greens&mode=thematic&loc=35.9453,-115.1393,z9.4648&g=050XX00US32003$1400000&tid=ACSST5Y2020.S0801&cid=S0801_C01_010E).\n* The map is already set to show Clark County, Nevada\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/e3fc453ef32d41819135f2b0d6e5c78d).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools",
            "questionText": "How many schools (CCSD & private) are in the area and within a ½ mile radius?",
            "useUrl": "Use Clark County Education data",
            "url": "https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978",
            "hint": "(Note: charter schools appear listed as private schools in the data source)",
            "instructionsMarkdown": "* Click on the link for the Clark County Education Data tool, [available here](https://www.arcgis.com/apps/mapviewer/index.html?layers=ca9eba42cebc4b0c965ffe80a3923978).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar then press enter.\n* Zoom out from the address area using the minus (-) button on the lower right of the map\n* Both CCSD and private schools will appear color-coded on the map as indicated in the legend that displays on the right side under “Symbology.” CCSD schools will feature additional labels, including flags and names.\n* Zoom in and out as needed to see schools within ½ mile radius\n* To measure distance, click the wrench icon (Map tools) on the right edge of the screen, then click “Measurement.”\n  * Click on a point in the project area that is closest to the school and then drag the measurement line to the nearest part of the school to reveal the distance\n  * Select “miles” on the drop-down menu for “unit”\n  * Continue this process until it is clear if there are 0, 1, or >1 schools within ½ mile\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area",
            "videoId": "1onJoNn-vEk0OramBu4DhBWFV-WvYCUZi"
          },
          {
            "id": "public-parks",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Clark County data",
            "url": "https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99",
            "hint": "",
            "instructionsMarkdown": "* Click on the Clark County Recreation data link, [available here](https://www.arcgis.com/home/webmap/viewer.html?useExisting=1&layers=7b483a11c0b3489d8ce7601081872f99).\n* Click on the magnifying glass icon located on the lower right of the map.\n* Enter the address of the project area into the search bar that appears, then press enter.\n* Click on the sideways carrot button (>) to the left of  “Recreation” on the left side information bar, and ensure that only the following layers are visible: “Las Vegas Parks,” “Clark County Parks,” “Boulder City Parks,” “Henderson Parks,” “Mesquite Parks,” and “North Las Vegas Parks.” \n  * To hide a layer, click the eye icon next to the three dots for that particular layer. An eye icon with a line through it indicates a hidden layer.\n* Click on “Legend” on the left-hand sidebar to reveal how parks appear on the map.\n* Zoom in and out (as needed) until the map displays about ½ mile in each direction from the project area.\n* To measure distance, click the wrench icon (Map tools) on the right-side toolbar, then click “Measurement.”\n  * Click on a point in the project area that is closest to the park and then drag the measurement line to the nearest part of the park to reveal the distance.\n  * Select “miles” on the drop-down menu for “unit.”\n  * Continue this process until it is clear if there are 0, 1, or >1 parks within ½ mile.\n* Select the answer below that corresponds to the number of parks located within ½ mile of the project area.\n",
            "videoId": "1XGLuqsRHqqnQussFQD1z92VpkI9KJsav"
          },
          {
            "id": "bus-stops-rtc",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/bbe926c3bd4b42cbb599b4417664b87d?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": ""
          },
          {
            "id": "bike-lanes-rtc",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Bike lanes and shared use paths: Use RTC data",
            "url": "https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/",
            "hint": "",
            "instructionsMarkdown": "* Access the RTC Bike Lanes Map, available [here](https://experience.arcgis.com/experience/21cefdd1b0004349ab370a348afdea4b/).\n* Click on the “Map Layers” icon on the information bar. Ensure that the boxes for “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” are checked, and uncheck the remaining boxes.\n* Click on “Legend” (icon with 3 horizontal lines) in the top right of the menu to reveal how “Enhanced Bicycle Lane,” “Bicycle Lane,” and “Shared Use Path” appear on the map, then exit that menu.\n* Click the magnifying glass icon at the top right of the map, then enter the project area address in the search bar and press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map until the map displays about 1/4 mile in each direction from the project area. \n* Click on the “Measure” button near the magnifying glass (a ruler with two arrows above it)\n  * Click on a point within the project area closest to a bicycle lane or shared use path and then drag the measurement line to the lane or path to reveal the distance.\n  * Ensure “Miles” is set as the unit of measurement (in a drop-down menu slightly to the right).\n  * Continue this process until it is clear if there are 0 or 1 or more bicycle lanes and/or shared use paths within 1/4 mile.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area.\n",
            "videoId": "1K5qUtMPqAvlCFuPzC5s7mN9oLYOSdGWO"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf",
            "hint": "",
            "instructionsMarkdown": "* Open the Existing Level of Comfort for bicycling map tool from the Regional Transportation Commission Regional Bicycle and Pedestrian Plan, [available here](https://rtcsnv.maps.arcgis.com/apps/instant/atlas/index.html?appid=5dc8ccfc889447b7bbc16adaf47380c8&webmap=55a91395767f47cbb8d549bfbbeca5cf).\n* Enter the project area's address in the search box at the top left of the map.\n* Zoom out from the address area using the minus icon button on the upper left of the map screen\n* Identify the nearest collector or arterial roadway with a green, blue, orange, or red line on the map as indicated in the legend that displays on the right side of the screen.\n  * If only one such roadway exists, record its Level of Comfort.\n  * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n  * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the top left corner of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort",
            "videoId": "1kZQX6qnFdu0INASGg3G2GZ18PFkAdnub"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/5dd478f3e17746e7bb3a374d1873bf73).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    },
    {
      "id": "washoe",
      "name": "Washoe County",
      "sections": [
        [
          {
            "id": "underserved",
            "questionText": "How underserved is the geographic area where the project will be built?",
            "useUrl": "Use U. of Wisconsin Area Deprivation Index (state deciles)",
            "url": "https://www.neighborhoodatlas.medicine.wisc.edu/mapping",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U. of Wisconsin Area Deprivation Index (ADI), [available here.](https://www.neighborhoodatlas.medicine.wisc.edu/mapping)\n* Select Nevada\n* Ensure “State-Only Deciles” is selected (this is the default)\n* Enter the test address located within the project area.\n* Select “Search”\n* A State Decile Information box will appear. Use this for the ADI value AND the point value.\n  * If the project area straddles multiple state decile values, average them.\n  * Round decimal of .5 or more up to the next whole number and decimals under .5 down.\n  * If no decile information is available for the block in which the address is located, average the decile values of all contiguous blocks. \n* Place the value, between 1 and 10 in the “Pts” column",
            "videoId": "1LJynIeiBG8sgR84NZj1VV8XQ_DLKc2_l"
          },
          {
            "id": "biking-rate-washoe",
            "questionText": "What is the current rate of biking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data",
            "url": "https://data.census.gov/map/0500000US32031$14000,32031$1400000/ACSST5Y2024/S0801/S0801_C01_011E?q=S0801&layer=VT_2024_140_00_PY_D1&palette=Blues&loc=39.5500,-119.8100,z7.2000",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on biking to work, available [here](https://data.census.gov/map/0500000US32031$14000,32031$1400000/ACSST5Y2024/S0801/S0801_C01_011E?q=S0801&layer=VT_2024_140_00_PY_D1&palette=Blues&loc=39.5500,-119.8100,z7.2000).\n* The map is set to show Washoe County, Nevada.\n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner.\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click on a Census Tract to reveal the rate percentile of biking to work within that tract\n  * Be sure to identify the percent who bike to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who bike to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who bike to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rMPpmqoKDFx6zb2DBktmRW67OMEUpxWf"
          },
          {
            "id": "walking-rate-washoe",
            "questionText": "What is the current rate of walking to work in the proposed project's Census Tracts?",
            "useUrl": "Use U.S. Census data available",
            "url": "https://data.census.gov/map/0500000US32031$14000,32031$1400000/ACSST5Y2024/S0801/S0801_C01_010E?q=S0801&layer=VT_2024_140_00_PY_D1&palette=Greens&loc=39.5571,-119.7660,z8.9949&g=050XX00US32031$1400000&tid=ACSST5Y2024.S0801&cid=S0801_C01_010E",
            "hint": "",
            "instructionsMarkdown": "* Click the link for U.S. Census Data on walking to work, available [here](https://data.census.gov/map/0500000US32031$14000,32031$1400000/ACSST5Y2024/S0801/S0801_C01_010E?q=S0801&layer=VT_2024_140_00_PY_D1&palette=Greens&loc=39.5571,-119.7660,z8.9949&g=050XX00US32031$1400000&tid=ACSST5Y2024.S0801&cid=S0801_C01_010E).\n*   The map is already set to show Washoe County, Nevada. \n  * Be sure to use the most current time period for which data is available (click on \"Year\" above the map to verify)\n* Zoom in and out, as needed, to find the approximate project area by clicking on the plus and minus signs near the top right corner\n  * If experiencing difficulty, try locating the project area by zooming in and visually scanning for the Census Tract number. Tract numbers for a given area can be located by searching the [Census Geocoder](https://geocoding.geo.census.gov/geocoder/geographies/address?form) and locating the “Name” under “Census Tracts” in the search result.\n* Click within a Census Tract to reveal the rate percentile of walking to work within that tract\n  * Be sure to identify the percent who walk to work, not the Census Tract number\n  * Click the \"X\" in the corner of the legend to deselect and choose another Tract\n  * If the project area straddles multiple Census Tracts, find the percent who walk to work in each Tract. Then, calculate the average across Tracts by adding up the percent of people who walk to work in each Tract and then dividing by the total number of Tracts.\n* Select the corresponding PST option.",
            "videoId": "1rsuJBwFKzCQd044k1NNiQAvHkH6Nkvlt"
          },
          {
            "id": "pedestrian-crash-washoe",
            "questionText": "What is the pedestrian crash density in the area? (pedestrian crashes/sq. mile)",
            "useUrl": "Use pedestrian crash data map",
            "url": "https://experience.arcgis.com/experience/cfd26b75fb214f148156c0147086df16",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/cfd26b75fb214f148156c0147086df16).\nEnter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Pedestrian crashes are represented by blue dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the address. You may need to zoom out to view it fully. \n* The pedestrian crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1TVujiGOe-Abxq-r2O_lI90Qn9ZmNNR3L"
          },
          {
            "id": "bicycle-crash-washoe",
            "questionText": "What is the bicycle crash density in the area? (bicycle crashes/sq. mile)",
            "useUrl": "Bicycle Crash - Use bicycle crash data map",
            "url": "https://experience.arcgis.com/experience/cfd26b75fb214f148156c0147086df16",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for Nevada Pedestrian and Bicyclist Crash Data 2019-2024, available [here](https://experience.arcgis.com/experience/cfd26b75fb214f148156c0147086df16).\n* Enter an address within the project area into the search bar on the left top corner of the map and click on the magnifying glass.\n* To properly view the project area, click the minus (–) button located in the top-left corner of the map.\n* Bicycle crashes are represented by red dots on the map. The legend should be visible by scrolling through the sidebar on the bottom right corner.\n* Click the “POLYLINE” tool option from the right sidebar to draw a line along the project's exterior perimeter. Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n* Ensure “0.25” appears in the first box and “miles” appears in the second box on the right sidebar.\n* A blue shape with a 0.25-mile radius will appear around the area. You may need to zoom out to view it fully. \n* The bicycle crash density should automatically populate on the right-side menu.\n* Return to the PST to select the appropriate range of values within which your density value falls.\n",
            "videoId": "1lK8xJY703WTE5kfYKCR-Zlaz5JiwH5R_"
          },
          {
            "id": "land-use-diversity",
            "questionText": "What is the land use diversity index? (jobs to housing)",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link provided for the EPA Smart Location database,  [available here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n  * Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Land use diversity” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  *  Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\" \n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Employment and Household Entropy” score for each zone. Add those scores together and divide by the number of zones, then multiply your response by 10 to find the final calculation.\n* Click the corresponding Diversity below.\n",
            "videoId": "17Cx-9sVjuf-pliMi-w98TxWyUUv0WS3i"
          },
          {
            "id": "hu-jpa",
            "questionText": "What is the activity density (housing units + jobs per acre)?",
            "useUrl": "Use EPA Smart Location database",
            "url": "https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the provided database, available [here](https://epa.maps.arcgis.com/home/webmap/viewer.html?webmap=137d4e512249480c980e00807562da10).\n* Click on the “Layers” button in the top left corner.\n* Click on the sideways carrot button (>) to the left of “SmartLocationDatabase” to expand it into a dropdown menu\n* Click on the eye icon next to “Activity density (housing units + jobs per acre)” to ensure the layer is visible.\n* Ensure the visibility on all other layers is set to hide (the eye icon with the line through it)\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view the entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed\n  * If the project area straddles multiple color-coded zones, calculate the mid-point value for each Block Group and then compute their average. If this average is a whole number, then choose the lower interval as your response. For instance, if the average is 2, you would select 0-2 as your range, instead of 2-3.\n* Click the corresponding density.\n",
            "videoId": "1LoVrvz3GNzsUsM6fXlD2O1lxo4F_tNy2"
          },
          {
            "id": "schools-washoe",
            "questionText": "How many schools – public and private – are in the area and within a ½-mile radius?",
            "useUrl": "Use Washoe County Open Data",
            "url": "https://explore-washoe.opendata.arcgis.com/datasets/810b04e0f9134a76bdc1c9e5ffb86f98_134/explore?location=39.949900%2C-119.649350%2C8",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the Washoe County Open Data & Transparency Portal, [available here](https://explore-washoe.opendata.arcgis.com/datasets/810b04e0f9134a76bdc1c9e5ffb86f98_134/explore?location=39.949900%2C-119.649350%2C8).\n* Click \"OK\" on the opening disclaimer, if it appears.\n* Schools are shown as blue dots on the map. To view the legend, click the \"Legend\" icon located just below the magnifying glass icon on the right side of the map.\n* Click on the magnifying glass icon in the top right, then enter the address of the project area into the search bar and hit enter.\n* To zoom in or out from the address area, click the plus (+) or minus (–) buttons located at the lower right corner, just above the home icon.\n* To measure a distance, choose the \"Select to Add Point\" option (the geolocation marker icon) on the right sidebar, located just below the arrow icon.\n  * Click on a point within the project area, then select the \"Filter to This Point\" option.\n  * Enter 0.5 in the \"Distance\" field and choose miles from the \"Units\" drop-down menu.\n  * All schools within a ½-mile radius of the selected point will be highlighted with a black circle. You may need to zoom out to see the entire circle.\n  * The number of schools can be verified by clicking on the table icon on the right-side menu, where all schools within 0.5 miles should be listed.\n  * Select the answer below that corresponds to the number of schools located within ½ mile of the project area.",
            "videoId": "1TKQQAhhAXUbNDHu_ks8mHb2rgm-8vsWg"
          },
          {
            "id": "public-parks-washoe",
            "questionText": "How many public parks are in the project area or within ½ mile radius?",
            "useUrl": "Use Washoe County Open Data",
            "url": "https://explore-washoe.opendata.arcgis.com/datasets/3e28c14fca6c495d8cc674089643e6d8_6/explore?location=40.457250%2C-119.697500%2C7",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the Washoe County Open Data & Transparency Portal, [available here](https://explore-washoe.opendata.arcgis.com/datasets/3e28c14fca6c495d8cc674089643e6d8_6/explore?location=40.457250%2C-119.697500%2C7).\n* Click \"OK\" on the opening disclaimer, if it appears.\n* Public parks appear blue on the map. To view the legend, click the \"Legend\" icon located just below the magnifying glass icon on the right side of the map.\n* Click on the magnifying glass icon in the top right, then enter the address of the project area into the search bar and hit enter.\n* To zoom in or out from the address area, click the plus (+) or minus (–) buttons located at the lower right corner, just above the home icon.\n* To measure a distance, choose the \"Select to Add Point\" option (the geolocation marker icon) on the right sidebar, located just below the arrow icon.\n  * Click on a point within the project area, then select the \"Filter to This Point\" option.\n  * Enter 0.5 in the \"Distance\" field and choose miles from the \"Units\" drop-down menu.\n  * All parks within a ½-mile radius of the selected point will be highlighted with a black circle. You may need to zoom out to see the entire circle.\n  * The number of parks can be verified by clicking on the table icon on the right-side menu, where all parks within 0.5 miles should be listed.\n  * Select the answer below that corresponds to the number of public parks located within ½ mile of the project area.",
            "videoId": "1iJ4-ebjHwsB7wf2snwnrrnJvpfOFDrai"
          },
          {
            "id": "bus-stops-washoe",
            "questionText": "What is the level of bus service within a quarter mile of the project area?",
            "useUrl": "Use the PST Bus Stop Information map,",
            "url": "https://experience.arcgis.com/experience/ae620e958419424381e4855b2d3adb26?draft=true",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Bus Stop Information map, available [here](https://experience.arcgis.com/experience/ae620e958419424381e4855b2d3adb26?draft=true).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Area” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The bus stop accessibility score will appear in a blue box on the right toolbar.\n* Enter the answer below that corresponds to the level of bus service.\n",
            "videoId": "1-c5E25TSebN_3inZxxgYGgwjpCXezn7u"
          },
          {
            "id": "bike-lanes-washoe",
            "questionText": "How many bike lanes and shared use paths are in the area or within 1/4 mile radius?",
            "useUrl": "Use RTC Washoe data",
            "url": "https://regional-transportation-commission-washoe-open-data-rtcwashoe.hub.arcgis.com/apps/4f1ba7ad3d874a8595d1aa35479b49c3/explore",
            "hint": "",
            "instructionsMarkdown": "* Click on the RTC data link for Washoe [here](https://regional-transportation-commission-washoe-open-data-rtcwashoe.hub.arcgis.com/apps/4f1ba7ad3d874a8595d1aa35479b49c3/explore).\n* In the search box above the map on the top center of the screen, enter the address for the project area\n    * Click on the small box that appears under the search result bar of the project area to save the selected address\n* To measure within a ¼ mile radius of the project area, hover over the point/line on the map and click ‘Filter to this point’\n* Zoom in or out as needed until the map shows approximately ¼ mile (0.25 miles) in every direction from the project area.\n* Select “Miles” as the unit of distance, and set the distance to 0.25.\n* Click on any blue lines within the ¼-mile radius.\n* Under the “Type” category, verify that the selected lanes are existing lanes, and count all that fall within the area.\n* Select the answer below that corresponds to the number of bicycle lanes and/or shared use paths located within 1/4 mile of the project area\n",
            "videoId": "18dzv9QJLKaLhOw8uLla7gHzzqJw2k9xc"
          }
        ],
        [
          {
            "id": "walkability",
            "questionText": "What is the National Walkability Index Score?",
            "useUrl": "Use EPA National Walkability Score",
            "url": "https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba",
            "hint": "",
            "instructionsMarkdown": "* Click the link provided for the U.S. Environmental Protection Agency (EPA) National Walkability Score, [available here](https://epa.maps.arcgis.com/apps/mapviewer/index.html?webmap=f16f5e2f84884b93b380cfd4be9f0bba).\n* Click on the magnifying glass in the bottom right of the map. Enter the address for the project area inside the text box that appears and hit enter.\n  * Zoom in or out on the map to view entire project area. Note where the project area is located, as the circle indicator may disappear.\n* On the left, click on \"Basemap\" (the icon with four small squares) and select \"Imagery Hybrid.\"\n* Click on \"Legend” in the top left corner. You may need to first select the icon of three dots beneath Basemap.\n* Cross-reference color(s) in the project area with the color/number range listed.\n  * If the project area straddles multiple color-coded zones, find the exact average by clicking on each block group in the project area and obtaining the “Walkability Index” score for each zone. Add those scores together and divide by the number of zones to find the final calculation.\n* Select the corresponding National Walkability Score.\n",
            "videoId": "19obFWR3mjn556N2jDPB41fkWJvMUqn66"
          },
          {
            "id": "comfort-level-washoe",
            "questionText": "What is the level of comfort on the closest collector or arterial roadway segment(s)?",
            "useUrl": "Use RTC Ped/Bike Plan Level of Comfort Online Tool",
            "url": "https://regional-transportation-commission-washoe-open-data-rtcwashoe.hub.arcgis.com/apps/90d59174776548de99c886417492cf44/explore",
            "hint": "",
            "instructionsMarkdown": "* Click on the link for the Regional Transportation Commission of Washoe Bike Level of Traffic Stress tool, [available here](https://regional-transportation-commission-washoe-open-data-rtcwashoe.hub.arcgis.com/apps/90d59174776548de99c886417492cf44/explore).\n* Click the map layers icon on the left side of the screen and ensure that only Bike Level of Traffic Stress (BLTS) is visible.\n    * To hide a layer, click the eye icon next to the three dots on that layer. An eye icon with a line through it indicates a hidden layer.\n* Enter the project area's address in the text box at the top of the map and press enter.\n* Zoom in (+) and out (-) from the address area using the icons in the upper left corner of the map\n* Find the closest collector or arterial road to the project area. The map legend can be accessed by clicking the top button on the far left side of the screen.\n    * If only one such roadway exists, record its Level of Comfort. \n    * If multiple colored lines exist, average their Levels of Comfort and round accordingly (0.5 or more rounds up, below 0.5 rounds down).\n    * If none exist in the project area, use the measurement tool (ruler with arrows above it) on the left side of the screen to locate the closest one and record its Level of Comfort.\n* Select the response with the appropriate Level of Comfort \n",
            "videoId": "1HrfWKP1BER75YRxdso8azkWybmzMrecn"
          },
          {
            "id": "maps-mini",
            "questionText": "What is the average Microscale Audit of Pedestrian Streetscapes (MAPS) Mini score for all of the segments in the project area?",
            "useUrl": "Conduct MAPS Mini for each segment in person and then average them to get a MAPS mini score.",
            "url": "https://www.drjimsallis.com/maps",
            "hint": "",
            "instructionsMarkdown": "Note: The MAPS Mini Survey may also be completed using online maps, though the information may not be as up-to-date.\n* Click the link provided for the MAPS Mini Survey, [available here](https://www.drjimsallis.com/maps).\n* Click the box on the left-hand side of the page that is labeled “MAPS Mini.”\n  * You should review the “MAPS Mini Protocol and Picture Guide” before going on to the next section. The guide provides necessary field procedures for the user to understand how to answer survey questions correctly.\n* Click on the MAPS Mini Survey\n* Complete the MAPS Mini Survey for each segment - i.e., block. Average the MAPS Mini points for all segments.\n* Use the MAPS Mini Points to derive and record the corresponding PST points.\n",
            "videoId": "1zUzgSCSfwZu3MJGTe3hWTMy7qyol7_sq"
          },
          {
            "id": "shade-washoe",
            "questionText": "How much of the project area is shaded during a hot summer afternoon?",
            "useUrl": "Use the PST Tree Canopy and Shade Map, ",
            "url": "https://experience.arcgis.com/experience/1a99d60134f24af9ba4aa9f5d1035bdb",
            "hint": "",
            "instructionsMarkdown": "* Click the link for the PST Tree Canopy and Shade Map, available [here](https://experience.arcgis.com/experience/1a99d60134f24af9ba4aa9f5d1035bdb).\n* In the search box on the top left of the map, enter the address for the project area and click on the magnifying glass or press enter.\n* Zoom in and out (as needed) using the (+) and (-) buttons on the top left of the map.\n* Use the “Draw Polygon” button on the right sidebar to draw the shape of the project area.\n  * Left click at a point on the map to begin drawing. Left click again at the end of each segment. Double-click to complete the drawing. (Note: This may be different for Mac and PC users.)\n  * The Combined Shade percentage will appear on the right toolbar.\n* Enter the answer below that corresponds to the combined shade of the project area during a hot summer afternoon.\n",
            "videoId": "1MG3Ep5M2eXuJJ4_tX7AzMgClWClW77rz"
          }
        ]
      ]
    }
  ]
};
