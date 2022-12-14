We are making publicly available [VoterFraud2020](https://github.com/sTechLab/VoterFraud2020), a multi-modal Twitter 
dataset with 7.6M tweets and 25.6M retweets from 2.6M users that includes [key phrases 
and hashtags](https://github.com/sTechLab/VoterFraud2020/blob/main/keywords.txt) related to voter fraud 
claims between October 23rd and December 16th. 
The dataset also includes the full set of links and links to YouTube videos shared in these tweets, 
with data about their spread in different Twitter sub-communities. Key takeaways from our initial analysis of the data are listed below.

The methodology for our data collection including the tracked keywords is detailed in the paper:  [*A. Abilov, Y. Hua, H. Matatov, O. Amir and M. Naaman. (2021). VoterFraud2020: a Multi-modal Dataset of Election Fraud Claims on Twitter.*](https://arxiv.org/abs/2101.08210) International Conference on Web and Social Media ([ICWSM 2021](https://www.icwsm.org/2021/index.html)).

The dataset is enhanced with the sub-community labels to enable quick study of how URLs, images and youtube videos spread within these sub-communities. 
The navigation on [this page](https://stechlab-voterfraud2020-analysis-app-yrtslm.streamlitapp.com/?page=Explore+The+Dataset) provides a quick summary of the top users, tweets, videos and links shared. 
Of the users in our data, we found that 99,884 were later suspended by Twitter. The suspension status of users are included, allowing researchers to investigate [Twitter's response](https://blog.twitter.com/en_us/topics/company/2021/protecting--the-conversation-following-the-riots-in-washington--.html) to voter fraud claims. 
The dataset also includes perceptual hash values for all images in the data. With these values, researchers can easily find duplicates and near-duplicate images in tweets to identify popular images. 
[This page](https://stechlab-voterfraud2020-analysis-app-yrtslm.streamlitapp.com/?page=Top+Images) presents top images shared in the dataset.

The dataset can be used by researchers to study the spread, reach, and 
dynamics of the campaign involving voter fraud claims on Twitter. The data can help expose, for example, how different 
public figures spread different claims, and the types of engagement various narratives received. 


The paper, dataset, and this web page are done in a collaboration between the 
[Social Technologies Lab](https://s.tech.cornell.edu/) at Cornell Tech and The Technion. 

The project was led by [Anton Abilov](https://twitter.com/antonabilov), [Yiqing Hua](http://yiqing-hua.com/), and [Hana Matatov](https://twitter.com/hanamatatov). Inquiries should go to Professor Mor Naaman at [mor.naaman@cornell.edu](mailto:mor.naaman@cornell.edu).

### Key Takeaways
- Community detection analysis on the dataset reveals five main sub-communities involved in the discussion: 
four communities that appear to promote claims of voter fraud (*"promoters"*) and one community of *"detractors"* (colored blue in Figure 1 on this page).
- Preliminary analyses show that Twitter???s suspensions mostly affected a specific sub-community within the cluster of voter fraud claim promoters (suspended users are orange in Figure 2, mostly overlapping with the yellow sub-community in Figure 1).
- Initial analysis found 50,385 users in the data who used QAnon-related hashtags in their tweets or profile descriptions. 
Of these users, 52.4% were suspended. There is strong evidence that Twitter???s suspensions focused on the QAnon community. 
We found that 82.7% of these ???QAnon users??? for whom we had network data were part of the "yellow" sub-community where suspension rates were highest (Figure 1). 
The rate of QAnon hashtags in the yellow sub-community was 5 to 99 times higher than other sub-communities in that graph.
- Many of the top YouTube videos shared by promoters of voter fraud claims are still available on YouTube as on 
January 18th, 2021; all the top ten videos shared by the promoter communities were still available on YouTube on January 10th. Explore the list on [this page](https://stechlab-voterfraud2020-analysis-app-yrtslm.streamlitapp.com/?page=Explore+The+Dataset).
- Additional information about the data and analysis is available in [the paper](https://arxiv.org/abs/2101.08210).

### Privacy and Ethical Considerations
The dataset was collected and made available according to Twitter's Terms of Service for academic researchers, following 
established guidelines for ethical Twitter data use. We do not directly share content of individual tweets. 
By using Tweet IDs as the main data element the dataset does not expose information about users whose data had been removed from the service. 

*Anton Abilov ([@AntonAbilov](https://twitter.com/antonabilov)), Yiqing Hua ([@yiqqqing](https://twitter.com/yiqqqing)), Hana Matatov ([@HanaMatatov](https://twitter.com/hanamatatov)), Ofra Amir ([@ofraam](https://twitter.com/ofraam)) & Mor Naaman ([@informor](https://twitter.com/informor)).*

<img src="https://storage.googleapis.com/voter-fraud-2020/img/retweet-graph.png">

**Figure 1:** Five communities in the retweet graph of people posting about voter-fraud claims; the blue cluster on the left side includes mainly detractors of voter-fraud claims.

<img src="https://storage.googleapis.com/voter-fraud-2020/img/retweet-graph-suspended-orange-min.jpg">

**Figure 2:** Where suspended users were located in the retweet graph (orange); they mostly came from one specific sub-community of claim promoters (yellow in Figure 1)