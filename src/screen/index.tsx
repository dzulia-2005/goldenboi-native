import React,{ useState } from 'react';
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {quizData} from '../data/index';


function Home(): React.JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 100);
    }
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    {isFinished ? (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>თქვენი ქულა: {score}</Text>
        <TouchableOpacity
          style={styles.restartButton}
          onPress={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setIsFinished(false);
          }}
        >
          <Text style={styles.restartText}>თავიდან დაწყება</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.quizContainer}>
        <View style={styles.Quiz}>
            <Text style={styles.QuizText}>
                Quiz #{currentQuestionIndex + 1}
            </Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.questionText}>
          {quizData[currentQuestionIndex].question}
        </Text>
        {quizData[currentQuestionIndex].options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionButton}
            onPress={() => handleAnswer(option.isCorrect)}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8E3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  quizContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#F4F3F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom:70,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  restartText: {
    color: '#fff',
    fontSize: 18,
  },
  Quiz:{
    marginBottom : 100,
  },
  QuizText : {
    fontSize: 28,
  },
});

export default Home;

