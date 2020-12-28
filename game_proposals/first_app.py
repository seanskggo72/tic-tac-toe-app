#################################################################################
# Sample App Idea Visualiser
# Mobile Development Project - Sean & Andy
#################################################################################

#################################################################################
# Imports
#################################################################################

from PyQt5 import QtCore, QtGui, QtWidgets
from PIL import Image
from csv import reader
from random import choice
import sys

#################################################################################
# Globals
#################################################################################

# Binary representation of game board
game_state = [
    None, None, None, 
    None, None, None,
    None, None, None
]
end_game_state = [
    None, None, None, 
    None, None, None,
    None, None, None
]
# Game outcome strings
progress = "Game in progress..."
lose = "You lose :("
score = 0

#################################################################################
# Classes
#################################################################################

class Ui_window(object):
    def setupUi(self, window):
        ''' Creates the window for GUI and sets up all neccessary utilities '''
        # Compress all images
        images.compress(self, 'cross.png')
        images.compress(self, 'circle.png')
        # Set up window
        window.setObjectName("window")
        window.resize(306, 423)
        window.setToolTipDuration(-2)
        # Set up display state for Tic Tac Toe
        self.set_dimensions()
        self.set_labels()
        # update label and window descriptions
        self.retranslateUi(window)
        QtCore.QMetaObject.connectSlotsByName(window)

    def set_labels(self):
        ''' Sets labels for game status display ''' 
        # Create label reading "game status"
        self.label = QtWidgets.QLabel(window)
        self.label.setGeometry(QtCore.QRect(110, 330, 81, 16))
        self.label.setAlignment(QtCore.Qt.AlignCenter)
        self.label.setObjectName("label")
        # Add text box to show game outcome
        self.plainTextEdit = QtWidgets.QPlainTextEdit(window)
        self.plainTextEdit.setGeometry(QtCore.QRect(20, 350, 265, 31))
        self.plainTextEdit.setObjectName("plainTextEdit")
        self.plainTextbob = QtWidgets.QPlainTextEdit(window)
        self.plainTextbob.setGeometry(QtCore.QRect(20,390,265,23))

    def set_dimensions(self):
        ''' Recursively reads csv file for dimensions. Sets the board buttons 
        accordingly 
        ''' 
        dim_file = open("dimensions.csv")
        csv_data = reader(dim_file, delimiter=',')
        next(csv_data)
        for index in range(0, 10):
            temp = list(next(csv_data))
            exec(f"self.pushButton_{index} = QtWidgets.QPushButton(window)")
            exec(f"self.pushButton_{index}.setObjectName('pushButton_{index}')")
            exec(f'''self.pushButton_{index}.setGeometry(\
                QtCore.QRect({temp[0]}, {temp[1]}, {temp[2]}, {temp[3]}))''') 
        self.pushButton_0.clicked.connect(lambda: self.clicked(0))
        self.pushButton_1.clicked.connect(lambda: self.clicked(1))
        self.pushButton_2.clicked.connect(lambda: self.clicked(2))
        self.pushButton_3.clicked.connect(lambda: self.clicked(3))
        self.pushButton_4.clicked.connect(lambda: self.clicked(4))
        self.pushButton_5.clicked.connect(lambda: self.clicked(5))
        self.pushButton_6.clicked.connect(lambda: self.clicked(6))
        self.pushButton_7.clicked.connect(lambda: self.clicked(7))
        self.pushButton_8.clicked.connect(lambda: self.clicked(8))
        self.pushButton_9.clicked.connect(self.reset)
        self.make_random()
        dim_file.close()

    def clicked(self, index):
        ''' Clicking behaviour of each button. If the button/square was previously
        pressed, then do nothing. Otherwise, display a circle of a cross depending on
        the player turn
        '''
        global game_state
        if game_state[index] is None:
            return
        if game_state[index]:
            exec(f'self.pushButton_{index}.setStyleSheet("background-image : url(circle.png);")')
        else:
            exec(f'self.pushButton_{index}.setStyleSheet("background-image : url(cross.png);")')
        game_state[index] = False if game_state[index] else True
        self.check_outcome()
        self.make_random()
        self.check_outcome()
        _translate = QtCore.QCoreApplication.translate
        self.plainTextbob.setPlainText(_translate("window", "Score: " + str(score)))

    def make_random(self):
        global game_state
        new_list = list()
        for i, j in enumerate(game_state):
            if j is None:
                new_list.append(i)
        index = choice(new_list)
        photo = choice(['circle.png', 'cross.png'])
        exec(f'self.pushButton_{index}.setStyleSheet("background-image : url({photo});")')
        game_state[index] = True if photo == "cross.png" else False

    def check_outcome(self):
        ''' Check if the game state is drawn or won by a player '''
        global game_state, score
        _translate = QtCore.QCoreApplication.translate
        if game_state.count(None) == 9:
            self.make_random()
            return
        condition = [
            (game_state[0], game_state[1], game_state[2]),
            (game_state[3], game_state[4], game_state[5]),
            (game_state[6], game_state[7], game_state[8]),
            (game_state[0], game_state[3], game_state[6]),
            (game_state[1], game_state[4], game_state[7]),
            (game_state[2], game_state[5], game_state[8]),
            (game_state[0], game_state[4], game_state[8]),
            (game_state[2], game_state[4], game_state[6])
        ]
        # Check using the conditions
        for index, check in enumerate(condition):
            if index == 0:
                temp = [0,1,2]
            elif index == 1:
                temp = [3,4,5]
            elif index == 2:
                temp = [6,7,8]
            elif index == 3:
                temp = [0,3,6]
            elif index == 4:
                temp = [1,4,7]
            elif index == 5:
                temp = [2,5,8]
            elif index == 6:
                temp = [0,4,8]
            elif index == 7:
                temp = [2,4,6]
            if check == (True, True, True):
                exec(f'self.pushButton_{temp[0]}.setStyleSheet("")')
                exec(f'self.pushButton_{temp[1]}.setStyleSheet("")')
                exec(f'self.pushButton_{temp[2]}.setStyleSheet("")')
                game_state[temp[0]] = None
                game_state[temp[1]] = None
                game_state[temp[2]] = None
                score += 1
                return
            elif check == (False, False, False):
                exec(f'self.pushButton_{temp[0]}.setStyleSheet("")')
                exec(f'self.pushButton_{temp[1]}.setStyleSheet("")')
                exec(f'self.pushButton_{temp[2]}.setStyleSheet("")')
                game_state[temp[0]] = None
                game_state[temp[1]] = None
                game_state[temp[2]] = None
                score += 1
                return
        if game_state.count(None) == 0:
            self.plainTextEdit.setPlainText(_translate("window", lose))
            game_state = end_game_state
        if game_state.count(None) == 9:
            self.make_random()

    def reset(self):
        ''' Resets the game board '''
        global game_state, score
        game_state = [
            None, None, None, 
            None, None, None,
            None, None, None
        ]
        for index in range(0, 10):
            exec(f'self.pushButton_{index}.setStyleSheet("")')
        _translate = QtCore.QCoreApplication.translate
        self.plainTextEdit.setPlainText(_translate("window", progress))
        self.make_random()
        score = 0

    def retranslateUi(self, window):
        ''' Updates the starting state/description of buttons and window '''
        _translate = QtCore.QCoreApplication.translate
        window.setWindowTitle(_translate("window", "Game Proposal"))
        self.pushButton_9.setText(_translate("window", "Reset"))
        self.label.setText(_translate("window", "Game Status"))
        self.plainTextEdit.setPlainText(_translate("window", progress))

class images(object):
    ''' Class for compressing the image files: circle.png and cross.png.
    This was implemented so that the user can add any image online to 
    personalise the UI.
    '''
    def compress(self, image):
        ''' Resizes the input image to 83x83 ''' 
        img = Image.open(image)
        img = img.resize((83, 83))
        img.save(image) 

#################################################################################
# Main
#################################################################################

if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    window = QtWidgets.QDialog()
    ui = Ui_window()
    ui.setupUi(window)
    window.show()
    sys.exit(app.exec_())
