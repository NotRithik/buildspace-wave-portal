const deployer = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log('Deploying contract with account', deployer.address);
    console.log('Deployer balance is', accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log('WaveContract address:', waveContract.address);
};

const deploy = async () => {
    try {
        await deployer();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

deploy();