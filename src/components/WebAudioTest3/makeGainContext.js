

const makeGainContext = (context, gain) => {
    console.log(gain);
    const gainNode = context.createGain();
    // console.log(isFinite(parseFloat(Number(gain))));
    gainNode.gain.value = gain;
    return gainNode;
}

export default makeGainContext;