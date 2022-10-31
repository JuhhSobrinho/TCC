import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.IconSobre}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.icon} source={{uri: 'https://s3-alpha-sig.figma.com/img/e5c9/0f27/d0b2b78fba43bd52551b2cdd8a1e4967?Expires=1666569600&Signature=X84gvhoXajTbB7SeuGDMewxj7pTBwEr470nlk26Plfa5stP715ahvfaY2lsZlIVd2jZpXHOMS5EQJEMtJ3zFLNrkaMmLk1YZdfAs897o-ckBIhDC7Sp4Wi7BIUpru6fIaiqGKHznFsRboAxckQFp62cicOuVeBKIZTH6lIg~oKOnMIxd4EZfzZ4oQFQXUFc7qjwecxXpfxDGS8cI~mqfr80ZH-o0ccoQi1UttRWgcmR1iOpyFklzj-dCYRr1m8oL7feGzP~uL3zA3E0F4TliVAaSoUdHfVJunLE56wUst8YQc6sO16oOj92DetJ5ASwAd7h5Llu38vRRkI-Lmhg0Sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          </TouchableOpacity>
          <Text style={styles.Text}>Sobre</Text>
      </View>

          <Image style={styles.perfil} source={{uri: 'https://s3-alpha-sig.figma.com/img/741e/b001/3476b0f7f8c8cbc99e3cad0d67a3af48?Expires=1667174400&Signature=bd3MbexjyKUJdDncvtVn7xd8uQs60g0BqEDt-FFo6zf~aVDJQm2szdmIO6A~utyue4ID9WgL3RVU2ClOTxlV~AzXr7ZkcX7LbsLsF0ndtxLKPpg92cw5vmlYofVT4Jld60Bml~SOZeK6qaxEEVzp5~FgpNTcmeU0NeoAWQjn~tCd6WjFf8yErIK2nfjQzez8PvRrtaVRtu48SzwnhzH~fy21saqVm9VNrers-cauCPcX-3WyJSWckW7UvcnyVai0r6ef3tbEFcshJGpUxNG8VaQ84S8b74b84WulJ5XbIRxTn6sRo8Ch2Dsax8fMbf2iSHIWSmxf-adrIip8zkzdVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',}}></Image>
          <Text style={{fontSize: 22,   fontWeight: 'bold',}}>SOBRE </Text>
          <View style={styles.line} />
      <View>
          <Text> ECOM projeto para TCC </Text>
          <Text>Aplicativo para facilitar e auxiliar na procura
            e custo beneficio no preço  do combustivel</Text>
            <View style={{marginTop: 20}}>
                  <Text style={{fontWeight: 'bold',color: '#BFBFBF',}}>Desenvolvedores:</Text>
                  <Text style={styles.ds}>Anderson Gonçalves</Text>
                  <Text style={styles.ds}>Eduarda Marcondes</Text>
                  <Text style={styles.ds}>Gabriel Henrique</Text>
                  <Text style={styles.ds}>Jefferson Monteiro</Text> 
                  <Text style={styles.ds}>Juliano Narezi</Text> 
            </View>
      </View> 
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    height: '100%',
    alignItems: 'center',
  },
  icon:{
    margin: 15,
    width: 35,
    height: 35,
  },
  IconSobre:{
    margin: '8%',
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text:{
    color: '#BFBFBF',
    border: 20,
    borderColor: '#62D9AD',
    fontSize: 17,
    marginRight: '30%',
    width: '35%',
  },
  perfil: {
    borderRadius: 360,
    width: 150,
    height: 150,
    border: 30,
    borderWidth: 2,
    borderColor: '#62D9AD',
  },
  line:{ 
    height: 3,
    margin: 20,
    backgroundColor: '#D9D9D9',
    width: '90%',
},
  ds:{
    color: '#BFBFBF',

  }

});
