import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Config from './src/Config';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

/**
 * App
 *
 * Root component for the application.
 */
export default class App extends React.Component {

    /**
     * constructor
     *
     * @array   notes   all added notes.
     * @string  note    the current note value.
     */
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            note: ''
        }

    }

    /**
     * cloneNotes
     *
     * Creates a shallow copy of the state notes array
     *
     * @return   @array  cloned notes array
     */
    cloneNotes() {
        return [...this.state.notes];
    }

    /**
     * addNote
     *
     * Adds new note.
     *
     * @return  undefined
     */
    addNote() {

        if (this.state.note.length <= 0)
            return;

        const r = this.cloneNotes();
        r.push(this.state.note);

        this.setState({
            notes: r,
            note: ''
        });

    }

    /**
     * removeNote
     *
     * Removes note based on array index.
     *
     * @return  undefined
     */
    removeNote(i) {

        const r = this.cloneNotes();
        r.splice(i, 1);

        this.setState({notes: r});

    }

    /**
     * renderNotes
     *
     * Renders all notes in note array in a map.
     *
     * @return  Mapped notes array
     */
    renderNotes() {

        return this.state.notes.map((note, i) => {
            return (
                <TouchableOpacity 
                    key={i} style={styles.note} 
                    onPress={ () => this.removeNote(i) }
                >
                    <Text style={styles.noteText}>{note}</Text>
                </TouchableOpacity>
            );
        });

    }

    render() {

        return (
            <View style={styles.container}>

                <Header title={Config.title} />

                <ScrollView style={styles.scrollView}>
                    {this.renderNotes()}
                </ScrollView>


                <Footer
                    onChangeText={ (note) => this.setState({note})  }
                    inputValue={this.state.note}
                    onNoteAdd={ () => this.addNote() }
                />


            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    scrollView: {
        maxHeight: '82%',
        marginBottom: 100,
        backgroundColor: '#fff'
    },
    note: {
        margin: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderRadius: 10,
    },
    noteText: {
        fontSize: 14,
        padding: 20,
    }
});