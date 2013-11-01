
# String --> [String] --> String

# take input of word/phrase
# downcase
# split word into array of letters, ignore spaces
# to_sym
# map array of letters with appropriate phonetic word

# create hash of phonetics



def to_phonetic(phrase) {
	:a => "alpha",
	:b  => "bravo", 
	:c => "charlie",
	:d => "delta",
	:e => "echo",
	:f => "foxtrot",
	:g => "golf",
	:h => "hotel",
	:i => "india",
	:j => "juliett",
	:k => "kilo",
	:l => "lido",
	:m => "mike",
	:n => "november",
	:o => "oscar",
	:p => "papa",
	:q => "quebec",
	:r => "romeo",
	:s => "sierra",
	:t => "tango",
	:u => "uniform",
	:v => "victor",
	:w => "whiskey",
	:x => "xray",
	:y => "yankee",
	:z => "zulu"
	} [phrase]
end





def phoneticize(phrase)
	split_phrase = phrase.split(//)

	split_phrase.
	map do |letter|
	to_phonetic(letter.downcase.to_sym)
	end
end


class Letter < Struct.new(:letter_to_string)
end


a = Letter.new('a')
b = Letter.new('b')
c = Letter.new('c')
d = Letter.new('d')
e = Letter.new('e')
f = Letter.new('f')
g = Letter.new('g')
h = Letter.new('h')
i = Letter.new('i')
j = Letter.new('j')
k = Letter.new('k')
l = Letter.new('l')
m = Letter.new('m')
n = Letter.new('n')
o = Letter.new('o')
p = Letter.new('p')
q = Letter.new('q')
r = Letter.new('r')
s = Letter.new('s')
t = Letter.new('t')
u = Letter.new('u')
v = Letter.new('v')
w = Letter.new('w')
x = Letter.new('x')
y = Letter.new('y')
z = Letter.new('z')






