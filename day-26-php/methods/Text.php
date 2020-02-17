<?php 

class Text { 
  public $text; 

  public function __construct($text) { 
    $this->text = $text; 
  } 

  public function getLength() { 
    return strlen($this->text); 

  } 


  public function getNumberOfWords() { 
    return str_word_count($this->text);
  }

  public function getNumberOfSentences() { 
    $array = count_chars($this->text, 1);
    foreach($array as $char => $count) { 
      if ($char === 46) { 
        return $count;
      }
    }
  }

  public function getNumberOfParagraphs () {
    return count(preg_split('/\.\n/', $this->text));
  }

  public function getMostCommonWord () {
    $all_words = str_word_count($this->text, 1);
    $words_count = [];
    
    foreach ($all_words as $index => $word) {
      if (strlen($word) > 4) {
        $words_count[$word] = substr_count($this->text, $word);
      }
    }
    arsort($words_count);
    return array_key_first($words_count);
  }

  }; 