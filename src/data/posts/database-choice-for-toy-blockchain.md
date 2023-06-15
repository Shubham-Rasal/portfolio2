---
title: Database choice for toy blockchain in Go
slug: blog-2
date: 2023-06-17 
author: Shubham Rasal
tags: [blockchain, go, database]
---

I am building a toy blockchain in Go. I am doing this to learn more about blockchain and Go. I am also writing a blog series on this. 

For storing the world state of the blockchin (which is just a very large merkel patrichia tree), I need a database. I have to choose a database which is fast and easy to use. It will just be a key value store.

In this blog post, I will be discussing the database choice for my toy blockchain in Go. I will be discussing the following databases:
- [BadgerDB](https://dgraph.io/docs/badger/)
- [LevelDB](https://github.com/google/leveldb)
- [etcd](https://etcd.io/)

## BadgerDB

The database is built in Go and is optimized for SSDs. It is a key-value store and is very fast. It is also ACID compliant. It is also used by [Dgraph](https://dgraph.io/).

There is no issue as such for me to not pick this database. But I want to explore other databases as well. Also, I think this db would be an overkill for my toy blockchain.

## LevelDB

Built in C++ and used by Google Chrome. It is also a key-value store. It is also very fast. It is also used by [Ethereum](https://ethereum.org/en/).

The most popular implementation of ethereum is the go-ethereum or geth. When I was reading the code of geth, I found that they are using LevelDB but since the codebase is in Go, they are using the wrapper of LevelDB in Go - https://github.com/syndtr/goleveldb

Although this is an old implementation, when I tried it, al its features were working fine. I think I will be using this database for my toy blockchain.

## etcd

etcd is a distributed key-value store. It is built in Go and is used by Kubernetes. It is also used by [Docker](https://www.docker.com/).

The main issue which prevented me from using this db was that it's installation was not that simple. Some of the dependencies were only complied for 32-bit systems causing problems.





