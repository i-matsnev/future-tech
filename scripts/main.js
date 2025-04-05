import defineScrollBarWidthCSSVar from "./utils/defineScrollBarWidthCSSVar.js"
import Header from './Header.js'
import TabsCollection from "./Tabs.js"
import VideoPlayerCollection from "./VideoPlayer.js";
import ExpandableContentCollection from "./ExpandableContent.js";

defineScrollBarWidthCSSVar()

new Header()
new TabsCollection()
new VideoPlayerCollection()
new ExpandableContentCollection()

