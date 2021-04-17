export const convertTime = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    const hrs = rhours > 1 ? `${rhours} hours` : `${rhours} hour`;
    const mins = rminutes > 0 ? `${rminutes} minutes` : '';

    return rhours > 0 ? `${hrs} ${mins}` : `${mins}`;
}