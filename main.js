const CryptoJS = require("crypto-js");

class Block {

    constructor(index, hash, previoushash, data, timestamp) {

        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.data = data;
        this.timestamp = timestamp;

    }

}

Block.calculatorBlockHash = (

    index, previoushash, data, timestamp

) => CryptoJS.SHA256(index + previoushash + data + timestamp).toString();


Block.vaildataStructure = (aBlock) => 
typeof aBlock.index === "number" &&  
typeof aBlock.hash === "string" &&
typeof aBlock.previoushash === "string" &&
typeof aBlock.timestamp === "number" &&
typeof aBlock.data === "string"; 

const harusterBlock = new Block(0, "20121021020", "", "hello", 123000);

let BlockChain = [harusterBlock];


const getBlockchain = () => BlockChain;
const getNewTimeStamp = () => Math.round(new DataTransfer().getTime() / 1000);

const createNewBlock = (data) => {

    const previousBlock = getLatestBlockchain();
    const newIndex = previoushash.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculatorBlockHash(newIndex, previousBlock.hash, data, newTimestamp);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    AddBlock(newBlock);

    return newBlock;

}

const getHashBlock = (aBlock) => Block.calculatorBlockHash(aBlock.index, aBlock.previoushash, aBlock.data, aBlock.timestamp);

const isBlockVaild = (candidateBlock, previousBlock) => {

    if (!Block.vaildataStructure(candidateBlock)) {

        return false;

    }

    else if (previousBlock.index + 1 !== candidateBlock.index) {

        return false;

    }

    else if (previousBlock.hash !== candidateBlock.previoushash) {

        return false;

    }

    else if (getHashBlock(candidateBlock) !== candidateBlock.hash) {

        return false;

    }

    else {

        return true;

    }
}

const AddBlock = (candidateBlock) => {

    if (isBlockVaild(candidateBlock, getLatestBlockchain())) {

        BlockChain.push(candidateBlock);

   }

}

createNewBlock("2nd Block");
createNewBlock("3rd Block");
createNewBlock("4th Block");

console.log(BlockChain);

