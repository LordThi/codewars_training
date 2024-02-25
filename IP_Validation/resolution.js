function isValidIP(str) {
    //   si pas trois points false
    //   si  ascii pas compris entre 48 et 57 false sauf .
    //   si len = 0 false

    //   faire un split sur . et verifier chaque sous tableau
    let dotCount = 0;

    if (str.length === 0)
        return false;

    for (const letter of str) {
        if (letter.charCodeAt() < 48 || letter.charCodeAt() > 57){
            if (letter === ".")
                dotCount +=1;
            else 
                return false;
        }
    }

    if (dotCount !== 3) {
        return false
    }

    let seq = str.split(".")
    for (let i = 0; i < seq.length; i++) {
        if (seq[i].length === 0 || seq[i].length > 1 && seq[i].startsWith("0"))
            return false;
        else if (parseInt(seq[i]) < 0 || parseInt(seq[i]) > 255)
            return false;
    }


    return true;
    }