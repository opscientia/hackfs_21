# Quests
Quests are calls for data collection published by researchers on the Open Science Bay. Quests are typically composed of reproducible experiments that can run in browser or on a mobile app.

The metadata for quests, including their parent research project, associated data, and other linked assets is discoverable through Coral, a data asset management system running on Ocean Protocol. Metadata for published quests are stored on-chain via Coral, generating a unique hash for each version of the asset, and powering discoverability for compute providers and data consumers while perserving privacy of data providers.

## Experiment Factory

The experiment factory allows you to build docker images of reproducible runtime environments for surveys, games, psychometric, and other types of scientific experiments.

## Building
The quests in this folder are created using the Lab.js framework and exported in Experiment Factory format.

To build from this directory, first generate a dockerfile

```bash
docker run -v $PWD:/data quay.io/vanessa/expfactory-builder build /data/tutorial_quest_001/experiments/study
```

Next you can build the container, 

```bash
docker build --no-cache -t questfactory/tutorial_quest_001 .
```

To start the container,
```bash
docker run -p 80:80 questfactory/tutorial_quest_001 start
```

You can access the exp factory home page at localhost `127.0.0.1`

The quest can be found directly at `http://127.0.0.1/experiments/study/`

## TODOs
[ ] Saving Data from Quest, Local
[ ] Saving Data from Quest, remote (web3storage)
[ ] Synchronizing Quest Metadata with Coral
[ ] Replace Experiment Factory UX with Opsci Pass UX
[ ] SSL/HTTPs support
[ ] Verifiable Programmable Consent