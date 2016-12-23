function generatekeys(keySize) {
      var crypt = new JSEncrypt({default_key_size: keySize});
      crypt.getKey();
      var privatekey=crypt.getPrivateKey()
      var pubkey=crypt.getPublicKey()
    };
