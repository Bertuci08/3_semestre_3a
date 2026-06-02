import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dadosJogo, setDadosJogo] = useState({opcoes: []});
  const [respondido, setRespondido] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const { imagem, respostaCorreta, opcoes } = dadosJogo;

  const novaRodada = async () => {
    try {
      setRespondido(false);
      setMensagem("");

      const resposta = await fetch('http://localhost:3000/perguntas');
      const dados = await resposta.json();
      setDadosJogo(dados);
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao conectar ao servidor");
    }
  }

  const alternativa = (opcaoOriginal) => {
    if (opcaoOriginal === respostaCorreta){
      setMensagem("Parabéns, você acertou!");
    } else {
      setMensagem("Você errou!")
    }
    setRespondido(true);
  }

  useEffect(() => {
    novaRodada();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{dadosJogo.pergunta}</Text>
      <Image source={{uri: imagem}} style={styles.foto} />

      {/* opcoes de resposta */}
      <View style={styles.containerOpcoes}>
      {
        opcoes?.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.botaoAlternativa, respondido && styles.botaoDesabilitado]}
            onPress={() => alternativa(item)} disabled={respondido}>
              <Text style={styles.textoBotao}>{item}</Text>
          </TouchableOpacity>
        ))
      }
      
      </View>
      {
        mensagem !== "" &&(
          <View style={[
            styles.cardFeedback,
            mensagem === "Parabéns, você acertou!" ? styles.bgAcertou : styles.bgErrou
          ]}>
            <Text style={styles.textoFeedback}>{mensagem}</Text>
          </View>
        )
      }
      {
        respondido && (
          <TouchableOpacity style={styles.botaoProximo} onPress={novaRodada}>
            <Text style={styles.textoProximo}>Próxima Questão</Text>
          </TouchableOpacity>
        )
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 1,
  },

  textoCarregando: {
    fontSize: 18,
    color: '#CBD5E1',
    fontWeight: '600',
  },

  foto: {
    width: 320,
    height: 220,
    resizeMode: 'cover',
    borderRadius: 20,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: '#38BDF8',
    backgroundColor: '#1E293B',

    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 10,
  },

  containerOpcoes: {
    width: '100%',
    alignItems: 'center',
    gap: 14,
  },

  botaoAlternativa: {
    width: '92%',
    backgroundColor: '#1E293B',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#334155',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 4,
  },

  botaoDesabilitado: {
    opacity: 0.5,
  },

  textoBotao: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },

  cardFeedback: {
    width: '92%',
    padding: 18,
    borderRadius: 18,
    marginTop: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 6,
  },

  bgAcertou: {
    backgroundColor: '#064E3B',
    borderWidth: 2,
    borderColor: '#10B981',
  },

  bgErrou: {
    backgroundColor: '#7F1D1D',
    borderWidth: 2,
    borderColor: '#EF4444',
  },

  textoFeedback: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  botaoProximo: {
    marginTop: 24,
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,

    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },

  textoProximo: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});