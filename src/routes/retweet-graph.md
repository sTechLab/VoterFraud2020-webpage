---
title: VoterFraud2020 - a Twitter Dataset of Election Fraud Claims
layout: post
---

We constructed a retweet graph of the VoterFraud2020 dataset, where nodes 
represent users and directed edges correspond to retweets between the users. 
The direction of an edge corresponds to the direction of the information 
spreading in the retweet relation. Edges are weighted according to the 
number of times the corresponding source user has been retweeted. 
The resulting network consists of 1,887,736 nodes and 16,718,884 edges. 
Since the graph only includes retweeting and retweeted users, this number corresponds to 73.8% of all users in our dataset.


### Community Detection using Infomap
To detect communities within the graph, we used the [Infomap community detection 
algorithm](https://mapequation.github.io/infomap/python/), which captures the flow of information in directed networks.
Using the default parameters, the algorithm produces thousands of clusters. 
By excluding all clusters that contain fewer than 1% of the nodes we are left 
with 90% of all nodes which are clustered into five communities.

<img src="https://storage.googleapis.com/voter-fraud-2020/img/community_stats.png" style="width: 49%">
<img src="https://storage.googleapis.com/voter-fraud-2020/img/retweet-graph.png" style="width: 49%">

_**Table 1 & Figure 1:** Five communities in the retweet graph of people posting about voter-fraud claims; the blue cluster on the left side is mostly of detractors of the claims._

We visualize the retweet network using the Force Atlast 2 layout in Gephi.
Figure 1 indicates that the nodes are split between two distinct 
clusters - community 0 (blue), which mostly consists of _"detractors"_ of the claims, and communities 1, 2, 3 and 4 _("promoters")_ on the right. 

### Labeling Suspended & Deleted Users
The VoterFraud2020 dataset is also enhanced with metadata about the users' active status. 
In total 3.9% of the accounts (99,884) in the data were suspended.

<img src="https://storage.googleapis.com/voter-fraud-2020/img/retweet-graph-suspended-orange-min.jpg" style="width: 100%;">

**Figure 2:** Where suspended users were located in the retweet graph (orange); they mostly came from a specific subcommunity of claim promoters.